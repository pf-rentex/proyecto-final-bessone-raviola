import { Request, Response } from 'express';
import Property from '../models/property';

const safeParams = (req) => {
    const params = req.query;
    const whitelist = [
        'attributes',
        'measurements',
        'sorting',
        'skip',
        'limit',
    ];

    if (params.measurements) {
        //Measurements keys (price, square mts, etc.)
        for (const measurementKey in params.measurements) {
            //Measurements comparison keys ($lt, $gt, etc.)
            for (const comparisonKey in params.measurements[measurementKey]) {
                params.measurements[measurementKey][comparisonKey] =
                    +params.measurements[measurementKey][comparisonKey];
            }
        }
    }

    if (params.sorting) {
        for (const key in params.sorting) {
            params.sorting[key] = +params.sorting[key];
        }
    }

    if (params.skip) {
        params.skip = +params.skip;
    }

    if (params.limit) {
        params.limit = +params.limit;
    }

    return Object.keys(params)
        .filter((key) => whitelist.indexOf(key) >= 0)
        .reduce((res, key) => ((res[key] = params[key]), res), {});
};

const isEmptyObject = (obj) => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};

const getProperties = async (req: Request, res: Response) => {
    const request: any = await safeParams(req);

    try {
        // No filters applied, return all properties
        if (isEmptyObject(request)) {
            const properties = await Property.find();
            return res.status(200).json({ properties });
        }

        const { attributes, measurements, sorting, skip, limit } = request;

        const sortingKey = sorting ? Object.keys(sorting)[0] : null;
        const sortingValue = sorting ? Object.values(sorting)[0] : null;

        const query = [
            ...(attributes
                ? [
                      {
                          $match: {
                              $and: Object.keys(attributes).map((key) => ({
                                  [key]: attributes[key],
                              })),
                          },
                      },
                  ]
                : []),
            ...(measurements
                ? [
                      {
                          $match: {
                              $and: Object.keys(measurements).map((key) => ({
                                  [key]: measurements[key],
                              })),
                          },
                      },
                  ]
                : []),
            ...(sorting ? [{ $sort: { [sortingKey]: sortingValue } }] : []),
            ...(skip ? [{ $skip: skip }] : []),
            ...(limit ? [{ $limit: limit }] : []),
        ];

        const properties = await Property.aggregate(query).exec();

        return res.status(200).json({ properties });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

const createProperty = async (req: Request, res: Response) => {
    const { address, description, price, province, city } = req.body;

    const property = new Property({
        address,
        description,
        price,
        province,
        city,
    });
    try {
        await property.save();
        res.status(200).json({ msg: 'property successfully created' });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export { getProperties, createProperty };

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

const getProperty = async (req: Request, res: Response) => {
    const {id} = req.params;
  
    //Check for existing property
    const property = await Property.findOne({_id: id});
    if (!property) {
      return res.status(400).json({msg: "The Property does not exist"});
    } else {
      res.json(property);
    }
  };

const createProperty = async (req: Request, res: Response) => {
    const { address, description, price, province, city, expensesPrice, ownerId, features, amenities } = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({msg: "Please enter all fields"});
    }

    //Check for existing property
    const existingProperty = await Property.findOne({address: address});
    if (existingProperty) return res.status(400).json({msg: "Property Already exists"});

    const property = new Property({
        address,
        description,
        price,
        province,
        city,
        expensesPrice,
        ownerId,
        features,
        amenities,
    });
    try {
        await property.save();
        res.status(200).json({ msg: 'property successfully created' });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const updateProperty = async (req: Request, res: Response) => {
    const { id, address, description, price, province, city, expensesPrice, ownerId, features, amenities } = req.body;
  
    //Simple validation
    if (!fieldsAreValid(req.body)) {
      return res.status(400).json({msg: "Please enter all fields"});
    }
  
    //Check for existing property
    const existingProperty = await Property.findOne({_id: id});
    if (!existingProperty) {
      return res.status(400).json({msg: "The Property does not exist"});
    } else {
      try {
        await Property.updateOne({_id: id}, {
            address: address,
            description: description,
            price: price,
            province: province,
            city: city,
            expensesPrice: expensesPrice,
            ownerId: ownerId,
            features: features,
            amenities: amenities
        });
  
        return res.status(200).json({msg: "Property updated"});
      } catch (error) {
        return res.status(400).json({msg: `Error registering property: ${error}`});
      }
    }
  };

const deleteProperty = async (req: Request, res: Response) => {
    const {id} = req.params;
  
    const existingProperty = await Property.findOne({_id: id});
    if (existingProperty) {
      await existingProperty.remove();
      return res.status(200).json({msg: "Property removed"});
    } else {
      return res.status(400).json({msg: "The property does not exist"});
    }
  };

const fieldsAreValid = (body): boolean => {
    const { address, description, price, province, city, expensesPrice, ownerId} = body;
    return !!address && !!description && !!price && !!province && !!city && !!expensesPrice && !!ownerId;
};

export { getProperties, getProperty, createProperty, updateProperty, deleteProperty };
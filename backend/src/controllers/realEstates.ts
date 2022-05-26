import { Request, Response } from 'express';
import RealEstate from '../models/realEstate';

export interface UserRequest extends Request {
    user: {
        id: string;
    };
}

const createRealEstate = async (req: Request, res: Response) => {
    const {
        ownerName,
        ownerLastname,
        ownerDni,
        address,
        phone,
        cuit,
        email,
        businessName,
    } = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing realEstate
    const existingRealEstate = await RealEstate.findOne({ cuit: cuit });
    if (existingRealEstate)
        return res.status(400).json({ msg: 'RealEstate Already exists' });

    const newRealEstate = new RealEstate({
        ownerName,
        ownerLastname,
        ownerDni,
        address,
        phone,
        cuit,
        email,
        businessName,
    });

    //Create RealEstate
    try {
        const realEstate = await newRealEstate.save();
        res.json({ realEstate });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering realEstate: ${error}` });
    }
};

const getRealEstates = async (req: Request, res: Response) => {
    const realEstates = await RealEstate.find();
    res.json(realEstates);
};

const getRealEstate = async (req: Request, res: Response) => {
    const { cuit } = req.params;

    //Check for existing realEstate
    const realEstate = await RealEstate.findOne({ cuit });
    if (!realEstate) {
        return res.status(400).json({ msg: 'The RealEstate does not exist' });
    } else {
        res.json(realEstate);
    }
};

const updateRealEstate = async (req: UserRequest, res: Response) => {
    const {
        ownerName,
        ownerLastname,
        ownerDni,
        address,
        phone,
        cuit,
        email,
        businessName,
    } = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing realEstate
    const existingRealEstate = await RealEstate.findOne({ id: req.user.id });
    if (!existingRealEstate) {
        return res.status(400).json({ msg: 'The RealEstate does not exist' });
    } else {
        try {
            await RealEstate.updateOne(
                { id: req.user.id },
                {
                    ownerName: ownerName,
                    ownerLastname: ownerLastname,
                    ownerDni: ownerDni,
                    address: address,
                    phone: phone,
                    cuit: cuit,
                    email: email,
                    businessName: businessName,
                },
            );

            return res.status(200).json({ msg: 'RealEstate updated' });
        } catch (error) {
            return res
                .status(400)
                .json({ msg: `Error registering realEstate: ${error}` });
        }
    }
};

const deleteRealEstate = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingRealEstate = await RealEstate.findOne({ id: id });
    if (existingRealEstate) {
        await existingRealEstate.remove();
        return res.status(200).json({ msg: 'RealEstate removed' });
    } else {
        return res.status(400).json({ msg: 'The realEstate does not exist' });
    }
};

const fieldsAreValid = (body): boolean => {
    const {
        ownerName,
        ownerLastname,
        ownerDni,
        address,
        phone,
        cuit,
        email,
        businessName,
    } = body;

    return (
        !!ownerName &&
        !!ownerLastname &&
        !!ownerDni &&
        !!address &&
        !!phone &&
        !!cuit &&
        !!email &&
        !!businessName
    );
};

export {
    createRealEstate,
    getRealEstates,
    getRealEstate,
    updateRealEstate,
    deleteRealEstate,
};

import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import RealEstate from '../models/realEstate';
import { basicAuthValidation, generateToken } from './users';
import { UserType } from '../types/userTypes';
import User from '../models/user';

export interface UserRequest extends Request {
    user: {
        id: string;
    };
}

const fieldsAreValid = (body): boolean => {
    const {
        name,
        lastname,
        dni,
        address,
        phone,
        cuit,
        businessName,
    } = body;

    return (
        !!name
        && !!lastname
        && !!dni
        && !!address
        && !!phone
        && !!cuit
        && !!businessName
    );
};

const create = async (req: UserRequest, res: Response) => {
    const result = basicAuthValidation(req);

    if (result.error) {
        return res.status(400).json({
            error: result.message,
        });
    }

    const { password, email } = req.body;
    // Check for existing tenant
    const existingRealEstate = await RealEstate.findOne({ email });
    if (existingRealEstate) return res.status(400).json({ msg: 'Real Estate Already exists' });

    const newRealEstate = new RealEstate({
        email,
        password,
    });

    try {
        newRealEstate.password = await bcryptjs.hash(newRealEstate.password, 10);
        const realEstate = await newRealEstate.save();
        const token = generateToken(realEstate.id);

        if (!token) {
            return res.status(400).json({ msg: 'Error generating token' });
        }

        return res.status(201).json({
            token,
            user: {
                id: realEstate.id,
                email,
                userType: UserType.realEstate,
            },
        });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering Real estate: ${error}` });
    }
};

const getAll = async (req: Request, res: Response) => {
    const realEstates = await RealEstate.find();
    res.json(realEstates);
};

const getOne = async (req: Request, res: Response) => {
    const { cuit } = req.params;

    // Check for existing realEstate
    const realEstate = await RealEstate.findOne({ cuit });
    if (!realEstate) {
        return res.status(400).json({ msg: 'The RealEstate does not exist' });
    }
    return res.json(realEstate);
};

const updateOne = async (req: UserRequest, res: Response) => {
    const {
        name,
        lastname,
        dni,
        address,
        phone,
        cuit,
        businessName,
    } = req.body;

    // Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing realEstate
    const { id } = req.user;
    const existingRealEstate = await RealEstate.findOne({ _id: id });
    if (!existingRealEstate) {
        return res.status(400).json({ msg: 'The RealEstate does not exist' });
    }

    try {
        await RealEstate.updateOne(
            { _id: id },
            {
                name,
                lastname,
                dni,
                address,
                phone,
                cuit,
                businessName,
            },
        );

        return res.status(200).json({ msg: 'RealEstate updated' });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering realEstate: ${error}` });
    }
};

const deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingRealEstate = await RealEstate.findOne({ id });
    if (existingRealEstate) {
        await existingRealEstate.remove();
        return res.status(200).json({ msg: 'RealEstate removed' });
    }
    return res.status(400).json({ msg: 'The realEstate does not exist' });
};

export {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
};

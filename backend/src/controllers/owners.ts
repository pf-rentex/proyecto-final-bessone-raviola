import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import Owner from '../models/owner';
import { basicAuthValidation, generateToken } from './users';
import { UserType } from '../types/userTypes';

export interface UserRequest extends Request {
    user: {
        id: string;
    };
}

const fieldsAreValid = (body): boolean => {
    const {
        name, lastname, address, phone, dni, cuit,
    } = body;
    return (
        !!name
        && !!lastname
        && !!address
        && !!phone
        && !!dni
        && !!cuit
    );
};

const create = async (req: Request, res: Response) => {
    const result = basicAuthValidation(req);

    if (result.error) {
        return res.status(400).json({
            error: result.message,
        });
    }

    const { password, email } = req.body;
    // Check for existing tenant
    const existingOwner = await Owner.findOne({ email });
    if (existingOwner) return res.status(400).json({ msg: 'Tenant Already exists' });

    const newOwner = new Owner({
        email,
        password,
    });

    try {
        newOwner.password = await bcryptjs.hash(newOwner.password, 10);
        const owner = await newOwner.save();
        const token = generateToken(owner.id);

        if (!token) {
            return res.status(400).json({ msg: 'Error generating token' });
        }

        return res.status(201).json({
            token,
            user: {
                id: owner.id,
                email,
                userType: UserType.owner,
            },
        });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering Owner: ${error}` });
    }
};

const getAll = async (req: Request, res: Response) => {
    const owners = await Owner.find();
    res.json(owners);
};

const getOne = async (req: Request, res: Response) => {
    const { cuit } = req.params;

    // Check for existing owner
    const owner = await Owner.findOne({ cuit });

    if (!owner) {
        return res.status(400).json({ msg: 'The Owner does not exist' });
    }
    return res.json(owner);
};

const updateOne = async (req: UserRequest, res: Response) => {
    const {
        name, lastname, address, phone, dni, cuit,
    } = req.body;

    // Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing owner
    const { id } = req.user;
    const existingOwner = await Owner.findOne({ _id: id });
    if (!existingOwner) {
        return res.status(400).json({ msg: 'The Owner does not exist' });
    }
    try {
        await Owner.updateOne(
            { _id: id },
            {
                name,
                lastname,
                address,
                phone,
                dni,
                cuit,
            },
        );

        return res.status(200).json({ msg: 'Owner updated' });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering owner: ${error}` });
    }
};

const deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingOwner = await Owner.findOne({ id });
    if (existingOwner) {
        await existingOwner.remove();
        return res.status(200).json({ msg: 'Owner removed' });
    }
    return res.status(400).json({ msg: 'The owner does not exist' });
};

export {
    create, getAll, getOne, updateOne, deleteOne,
};

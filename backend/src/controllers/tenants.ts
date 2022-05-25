import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import Tenant from '../models/tenant';
import { basicAuthValidation, generateToken } from './users';
import { UserType } from '../types/userTypes';

export interface UserRequest extends Request {
    user: {
        id: string;
    };
}

const fieldsAreValid = (body): boolean => {
    const { name, lastname, dni, birthDate, address, phone } = body;
    return !!name && !!lastname && !!dni && !!birthDate && !!address && !!phone;
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
    const existingTenant = await Tenant.findOne({ email });
    if (existingTenant)
        return res.status(400).json({ msg: 'Tenant Already exists' });

    const newTenant = new Tenant({
        email,
        password,
    });

    try {
        newTenant.password = await bcryptjs.hash(newTenant.password, 10);
        const tenant = await newTenant.save();
        const token = generateToken(tenant.id);

        if (!token) {
            return res.status(400).json({ msg: 'Error generating token' });
        }

        return res.status(201).json({
            token,
            user: { ...tenant.toJSON() },
        });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering Tenant: ${error}` });
    }
};

const getAll = async (req: Request, res: Response) => {
    const tenants = await Tenant.find();
    res.json(tenants);
};

const getOne = async (req: Request, res: Response) => {
    const { dni } = req.params;

    // Check for existing tenant
    const tenant = await Tenant.findOne({ dni });
    if (!tenant) {
        return res.status(400).json({ msg: 'The Tenant does not exist' });
    }
    res.json(tenant);
};

const updateOne = async (req: UserRequest, res: Response) => {
    const { name, lastname, dni, birthDate, address, phone } = req.body;

    // Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing tenant
    const { id } = req.user;
    const existingTenant = await Tenant.findOne({ _id: id });

    if (!existingTenant) {
        return res.status(400).json({ msg: 'The Tenant does not exist' });
    }

    try {
        await Tenant.updateOne(
            { _id: id },
            {
                name,
                lastname,
                dni,
                birthDate,
                address,
                phone,
            },
        );

        return res.status(200).json({ msg: 'Tenant updated' });
    } catch (error) {
        return res.status(400).json({ msg: `Error updating tenant: ${error}` });
    }
};

const deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingTenant = await Tenant.findOne({ id });
    if (existingTenant) {
        await existingTenant.remove();
        return res.status(200).json({ msg: 'Tenant removed' });
    }
    return res.status(400).json({ msg: 'The tenant does not exist' });
};

export { create, getAll, getOne, updateOne, deleteOne };

import { Request, Response } from 'express';
import Tenant from '../models/tenant';

export interface UserRequest extends Request {
    user: {
        id: string;
    };
}

const createTenant = async (req: Request, res: Response) => {
    const { name, lastname, email, dni, birthDate, address, phone } = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing tenant
    const existingTenant = await Tenant.findOne({ dni: dni });
    if (existingTenant)
        return res.status(400).json({ msg: 'Tenant Already exists' });

    const newTenant = new Tenant({
        name,
        lastname,
        email,
        dni,
        birthDate,
        address,
        phone,
    });

    //Create Tenant
    try {
        const tenant = await newTenant.save();
        res.json({ tenant });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering tenant: ${error}` });
    }
};

const getTenants = async (req: Request, res: Response) => {
    const tenants = await Tenant.find();
    res.json(tenants);
};

const getTenant = async (req: Request, res: Response) => {
    const { dni } = req.params;

    //Check for existing tenant
    const tenant = await Tenant.findOne({ dni });
    if (!tenant) {
        return res.status(400).json({ msg: 'The Tenant does not exist' });
    } else {
        res.json(tenant);
    }
};

const updateTenant = async (req: UserRequest, res: Response) => {
    const { name, lastname, email, dni, birthDate, address, phone } = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing tenant
    const existingTenant = await Tenant.findOne({ id: req.user.id });
    if (!existingTenant) {
        return res.status(400).json({ msg: 'The Tenant does not exist' });
    } else {
        try {
            await Tenant.updateOne(
                { id: req.user.id },
                {
                    name: name,
                    lastname: lastname,
                    email: email,
                    dni: dni,
                    birthDate: birthDate,
                    address: address,
                    phone: phone,
                },
            );

            return res.status(200).json({ msg: 'Tenant updated' });
        } catch (error) {
            return res
                .status(400)
                .json({ msg: `Error registering tenant: ${error}` });
        }
    }
};

const deleteTenant = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingTenant = await Tenant.findOne({ id: id });
    if (existingTenant) {
        await existingTenant.remove();
        return res.status(200).json({ msg: 'Tenant removed' });
    } else {
        return res.status(400).json({ msg: 'The tenant does not exist' });
    }
};

const fieldsAreValid = (body): boolean => {
    const { name, lastname, email, dni, birthDate, address, phone } = body;
    return (
        !!name &&
        !!lastname &&
        !!email &&
        !!dni &&
        !!birthDate &&
        !!address &&
        !!phone
    );
};

export { createTenant, getTenants, getTenant, updateTenant, deleteTenant };

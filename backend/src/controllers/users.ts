import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { UserType } from '../types/userTypes';
import User from '../models/user';

export interface UserRequest extends Request {
    user: {
        id: string;
    };
}

const fieldsAreValid = (body): boolean => {
    const { email, password, userType } = body;
    return !!email && !!password && !!userType;
};

const isValidEmail = (email: string): boolean => {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegexp.test(email);
};

const passwordsMatch = (password: string, repeatPassword: string): boolean => {
    return password === repeatPassword;
};

const generateToken = (id: string) => {
    return jsonwebtoken.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: 3600,
        },
    );
};

const basicAuthValidation = (req: Request): {error: boolean; message: string} => {
    const {
        email, password, repeatPassword, userType,
    } = req.body;

    let validation = {
        error: false,
        message: '',
    };

    // Simple validation
    if (!fieldsAreValid(req.body)) {
        validation = {
            error: true,
            message: 'Please fill in all fields',
        };
        return validation;
    }

    if (!passwordsMatch(password, repeatPassword)) {
        validation = {
            error: true,
            message: 'Passwords do not match',
        };
        return validation;
    }

    if (!isValidEmail(email)) {
        validation = {
            error: true,
            message: 'Email is not valid',
        };
        return validation;
    }

    if (!Object.values(UserType).includes(userType)) {
        validation = {
            error: true,
            message: 'User type is not valid',
        };
        return validation;
    }

    return validation;
    // Check for existing user
    // const existingUser = await User.findOne({ email });
    // if (existingUser) return res.status(400).json({ msg: 'User Already exists' });
    //
    // const newUser = new User({
    //     email,
    //     password,
    //     userType,
    // });
    //
    // // Create salt & hash
    // try {
    //     const hash: string = await bcryptjs.hash(newUser.password, 10);
    //     newUser.password = hash;
    //     const user = await newUser.save();
    //     const token = jsonwebtoken.sign(
    //         { id: user.id },
    //         process.env.JWT_SECRET,
    //         {
    //             expiresIn: 3600,
    //         },
    //     );
    //     if (!token) {
    //         return res.status(400).json({ msg: 'Error generating token' });
    //     }
    //     res.status(201).json({
    //         token,
    //         user: {
    //             id: user.id,
    //             name: user.name,
    //             email: user.email,
    //             type: user.userType,
    //         },
    //     });
    // } catch (error) {
    //     return res
    //         .status(400)
    //         .json({ msg: `Error registering user: ${error}` });
    // }
};

const updateUser = async (req: UserRequest, res: Response) => {
    const {
        name, email, password, userType,
    } = req.body;

    // Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ id: req.user.id });
    if (!existingUser) {
        return res.status(400).json({ msg: 'The User does not exist' });
    }
    try {
        /// Hago el hash de la password.
        const hash: string = await bcryptjs.hash(password, 10);
        existingUser.password = hash;

        await User.updateOne(
            { id: req.user.id },
            {
                name,
                email,
                password: existingUser.password,
                userType,
            },
        );

        return res.status(200).json({ msg: 'User updated' });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering user: ${error}` });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingUser = await User.findOne({ id });
    if (existingUser) {
        await existingUser.remove();
        return res.status(200).json({ msg: 'User removed' });
    }
    return res.status(400).json({ msg: 'The User does not exist' });
};

export {
    basicAuthValidation, generateToken, updateUser, deleteUser,
};

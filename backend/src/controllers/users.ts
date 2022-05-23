import { Request } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { UserType } from '../types/userTypes';

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
};

export {
    basicAuthValidation, generateToken,
};

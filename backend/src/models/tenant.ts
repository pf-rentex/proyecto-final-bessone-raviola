import mongoose from 'mongoose';
import User, { IUser, options } from './user';

type ITenant = IUser & {
    birthDate: Date;
};

const Tenant : mongoose.Model<ITenant> = User.discriminator('Tenant', new mongoose.Schema({
    birthDate: {
        type: Date,
        required: false,
    },
}, options));

export default Tenant;

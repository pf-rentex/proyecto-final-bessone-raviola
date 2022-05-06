import mongoose from 'mongoose';
import User, { IUser, options } from './user';

type IOwner = IUser & {
    cuit: string;
}

const Owner : mongoose.Model<IOwner> = User.discriminator('Owner', new mongoose.Schema({
    cuit: {
        type: Number,
        required: false,
    },
},
options));

export default Owner;

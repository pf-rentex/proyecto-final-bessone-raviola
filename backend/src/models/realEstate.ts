import mongoose from 'mongoose';
import User, { IUser, options } from './user';

type IRealEstate = IUser & {
    cuit: string,
    businessName: string,
}

const RealEstate : mongoose.Model<IRealEstate> = User.discriminator('RealEstate', new mongoose.Schema({
    cuit: {
        type: Number,
        required: false,
    },
    businessName: {
        type: String,
        required: false,
    },
},
options));

export default RealEstate;

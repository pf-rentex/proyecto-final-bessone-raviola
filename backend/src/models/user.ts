import mongoose from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  registerDate: Date;
}

export const options = {
    discriminatorKey: 'userType',
    timestamps: true,
};

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: false,
    },
    lastname: {
        type: String,
        required: false,
    },
    dni: {
        type: Number,
        required: false,
        // unique: true  // dni should be unique as well, shouldn't it? (avoid scammers)
    },
    address: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    password: {
        type: Object,
        required: true,
    },
    registerDate: {
        type: Date,
        default: Date.now,
    },
}, options);

const User = mongoose.model<IUser>('User', userSchema);
export default User;

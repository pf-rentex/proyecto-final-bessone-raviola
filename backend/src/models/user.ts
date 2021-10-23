import mongoose from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  userType: string;
  password: string;
  registerDate: Date;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    enum: ["tenant", "owner", "realEstate"],
    default: "tenant",
  },
  password: {
    type: Object,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;

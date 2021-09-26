import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { UserType } from "../types/userTypes";
import User from "../models/user";


const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, userType } = req.body;

  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  if (!Object.values(UserType).includes(userType)) {
    return res.status(400).json({ msg: "Invalid user type" });
  }

  //Check for existing user
  const existingUser = await User.findOne({ email: email });
  if (existingUser) return res.status(400).json({ msg: "User Already exists" });

  const newUser = new User({
    name,
    email,
    password,
    userType,
  });

  //Create salt & hash
  try {
    const hash: string = await bcryptjs.hash(newUser.password, 10);
    newUser.password = hash;
    const user = await newUser.save();
    const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
    if (!token) {
      return res.status(400).json({ msg: "Error generating token" });
    }
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.userType,
      },
    });
  } catch (error) {
    return res.status(400).json({ msg: `Error registering user: ${error}` });
  }
}

const fieldsAreValid = (body): boolean => {
  const { name, email, password, userType } = body;
  return !!name && !!email && !!password && !!userType;
};

export { registerUser };

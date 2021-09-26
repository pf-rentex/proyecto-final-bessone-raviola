import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import User from '../models/user';
import { getUserRequest } from '../middlewares/auth';

const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  //Check for existing user
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User Does not exists' });

  //Validate password
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 });

  if (!token) return res.status(400).json({ msg: 'Error generating token' });

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};

const getUser = (req: getUserRequest, res: Response) => {
  User.findById(req.user.id)
      .select('-password')
      .then((user) => res.json(user));
};

export { authenticateUser, getUser };

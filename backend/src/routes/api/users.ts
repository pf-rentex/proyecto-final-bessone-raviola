import express, { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import User from "../../models/user";
import { UserType } from "../../types/userTypes";

const router = express.Router();

//@route    Post api/users
//@desc     Register new user
//@access   Public
router.post("/", async (req: Request, res: Response) => {
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
});

//@route    Put api/users/:id
//@desc     Modify user
//@access   Public
router.put("/:id", async (req: Request, res: Response) => {
  const { name, email, password, userType } = req.body;
  const { id } = req.params;
  debugger;
  //Simple validation
  if (!fieldsAreValid(req.body)) {
    return res.status(400).json({ msg: "Please enter all fields" });  
  }
  
  //Check for existing user
  const existingUser = await User.findOne({ id: id });
  if (!existingUser) {
    return res.status(400).json({ msg: "The User does not exist"});
  }
  else {
    try {

      /// hashear Password
      //const hash: string = await bcryptjs.hash(existingUser.password, 10);
      //existingUser.password = hash;

      await User.updateOne({id: id}, {
        name: name,
        email: email,
        password: password,
        userType: userType,
      });
  
      return res.status(200).json({ msg: "User updated"});
    }
    catch (error) {
      return res.status(400).json({ msg: `Error registering user: ${error}` });
    }
  }
});

//@route    Delete api/users/:id
//@desc     Delete user
//@access   Public
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const existingUser = await User.findOne({ id: id });
  if(existingUser)
  { 
    await existingUser.remove();
    return res.status(200).json({ msg: "User removed"});
  }
  else {
    return res.status(400).json({ msg: "The User does not exist"});
  }
});

const fieldsAreValid = (body): boolean => {
  const { name, email, password, userType } = body;
  return !!name && !!email && !!password && !!userType;
};

export default router;

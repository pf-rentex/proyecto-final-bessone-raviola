import express from "express";
import { deleteUser, registerUser, updateUser } from '../../controllers/users';
import auth from "../../middlewares/auth";

const router = express.Router();

//@route    Post api/users
//@desc     Register new user
//@access   Public
router.post("/", registerUser);

//@route    Put api/users
//@desc     Modify user
//@access   Public
router.put("/", auth, updateUser);

//@route    Delete api/users/:id
//@desc     Delete user
//@access   Public
router.delete("/:id", deleteUser);

export default router;

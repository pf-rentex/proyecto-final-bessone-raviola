import express from "express";
import { registerUser } from "../../controllers/users";

const router = express.Router();

//@route    Post api/users
//@desc     Register new user
//@access   Public
router.post("/", registerUser);

export default router;

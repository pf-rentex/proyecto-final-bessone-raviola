import express from "express";
import auth from "../../middlewares/auth";
import { getProperties } from "../../controllers/properties";

const router = express.Router();

//@route    Get api/properties/
//@desc     Get properties
//@access   Private
router.get("/properties", auth, getProperties);

export default router;

import express from "express";
import auth from "../../middlewares/auth";
import {createOwner, deleteOwner, getOwners, updateOwner} from "../../controllers/owners";

const router = express.Router();

//@route    Post api/owners
//@desc     Register new owner
//@access   Public
router.post("/", createOwner);

//@route    Get api/owners/
//@desc     Search owners
//@access   Public
router.get("/", getOwners);

//@route    Get api/owners/:cuit
//@desc     Search owner
//@access   Public
router.get("/:cuit", getOwners);

//@route    Put api/owners
//@desc     Modify owner
//@access   Private
router.put("/", auth, updateOwner);

//@route    Delete api/owners/:id
//@desc     Delete owner
//@access   Public
router.delete("/:id", deleteOwner);

export default router;

import express from "express";
import auth from "../../middlewares/auth";
import {
  createRealEstate,
  deleteRealEstate,
  getRealEstate,
  getRealEstates,
  updateRealEstate
} from "../../controllers/realEstates";

const router = express.Router();

//@route    Post api/realEstates
//@desc     Register new realEstate
//@access   Public
router.post("/", createRealEstate);

//@route    Get api/realEstates/
//@desc     Search realEstates
//@access   Public
router.get("/", getRealEstates);

//@route    Get api/realEstates/:cuit
//@desc     Search realEstate
//@access   Public
router.get("/:cuit", getRealEstate)

//@route    Put api/realEstates
//@desc     Modify realEstate
//@access   Private
router.put("/", auth, updateRealEstate);

//@route    Delete api/realEstates/:id
//@desc     Delete realEstate
//@access   Private
router.delete("/:id", auth, deleteRealEstate);

export default router;

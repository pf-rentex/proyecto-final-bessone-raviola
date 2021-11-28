import express from "express";
import auth from "../../middlewares/auth";
import { createPublication, getPublications, getPublication, updatePublication, deletePublication } from "../../controllers/publications";

const router = express.Router();

//@route    Post api/publications
//@desc     Create publication
//@access   Private
router.post(
    "/",
    //auth,
    createPublication
);

//@route    Get api/publications/
//@desc     Get publications
//@access   Public
router.get(
    "/",
    getPublications
);

//@route    Get api/publications/:id
//@desc     Get publication
//@access   Public
router.get(
    "/:id",
    getPublication
);

//@route    Put api/publications
//@desc     Modify publication
//@access   Private
router.put(
    "/",
    //auth, 
    updatePublication
);

//@route    Delete api/publications/:id
//@desc     Delete publication
//@access   Private
router.delete(
    "/:id",
    //auth,
    deletePublication
);

export default router;

import express from "express";
import auth from "../../middlewares/auth";
import { createRentalRequest, getRentalRequests, getRentalRequestById, getRentalRequestByUser, getRentalRequestByProperty, deleteRentalRequest } from "../../controllers/rentalRequests";

const router = express.Router();

//@route    Post api/rentalRequests
//@desc     Create Rental Request
//@access   Private
router.post(
    "/",
    // auth,
    createRentalRequest
);

//@route    Get api/rentalRequests/
//@desc     Get rentalRequests
//@access   Private
router.get(
    "/", 
    // auth,
    getRentalRequests
);

//@route    Get api/rentalRequests/:id
//@desc     Get rental Request by id
//@access   Private
router.get(
    "/:id",
    // auth,
    getRentalRequestById
);

//@route    Get api/rentalRequests/:userId
//@desc     Get rental Request by userId
//@access   Private
router.get(
    "/requestByUser/:userId",
    // auth,
    getRentalRequestByUser
);

//@route    Get api/rentalRequests/:propertyId
//@desc     Get rental Request by propertyId
//@access   Private
router.get(
    "/requestByProperty/:propertyId",
    // auth,
    getRentalRequestByProperty
);


//@route    Delete api/rentalRequests/:id
//@desc     Delete rental Request
//@access   Private
router.delete(
    "/:id",
    //auth,
    deleteRentalRequest
);

export default router;
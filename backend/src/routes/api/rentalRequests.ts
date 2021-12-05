import express from 'express';
import auth from '../../middlewares/auth';
import {
    createRentalRequest,
    getRentalRequests,
    getRentalRequestById,
    deleteRentalRequest,
    uploadFile,
} from '../../controllers/rentalRequests';
import upload from '../../middlewares/upload';

const router = express.Router();

// @route post /upload
// @desc uploads file to db
router.post('/upload', upload.array('files'), uploadFile);

//@route    Post api/rentalRequests
//@desc     Create Rental Request
//@access   Private
router.post(
    '/',
    // auth,
    createRentalRequest,
);

//@route    Get api/rentalRequests/
//@desc     Get rentalRequests
//@access   Private
router.get(
    '/',
    // auth,
    getRentalRequests,
);

//@route    Get api/rentalRequests/:id
//@desc     Get rental Request by id/userId/propertyId
//@access   Private
router.get(
    '/:id',
    // auth,
    getRentalRequestById,
);

//@route    Delete api/rentalRequests/:id
//@desc     Delete rental Request
//@access   Private
router.delete(
    '/:id',
    //auth,
    deleteRentalRequest,
);

export default router;

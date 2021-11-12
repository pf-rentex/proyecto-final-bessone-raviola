import express from 'express';
import auth from '../../middlewares/auth';
import { getAmenities, getAmenitiesById, createAmenities, deleteAmenities } from '../../controllers/amenities';

const router = express.Router();

// @route    Get api/amenities/
// @desc     Get amenities
// @access   Private
router.get(
    '/',
    // auth,
    getAmenities,
);

// @route    Get api/amenities/
// @desc     Get amenities by property
// @access   Private
router.get(
    '/:id',
    // auth,
    getAmenitiesById,
);

// @route    Post api/amenities/
// @desc     Create new amenities
// @access   Private
router.post(
    '/',
    // auth,
    createAmenities,
);

// @route    Delete api/amenities/
// @desc     Delete amenities
// @access   Private
router.delete(
    '/:id',
    // auth,
    deleteAmenities,
);

export default router;
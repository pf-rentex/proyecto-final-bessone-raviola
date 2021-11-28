import express from 'express';
import auth from '../../middlewares/auth';
import { getAmenities, getAmenityById, createAmenity, deleteAmenity } from '../../controllers/amenities';

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
// @desc     Get amenity by id
// @access   Private
router.get(
    '/:id',
    // auth,
    getAmenityById,
);

// @route    Post api/amenities/
// @desc     Create new amenity
// @access   Private
router.post(
    '/',
    // auth,
    createAmenity,
);

// @route    Delete api/amenities/
// @desc     Delete amenity
// @access   Private
router.delete(
    '/:id',
    // auth,
    deleteAmenity,
);

export default router;
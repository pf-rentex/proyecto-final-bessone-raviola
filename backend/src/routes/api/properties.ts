import express from 'express';
import auth from '../../middlewares/auth';
import { getProperties, createProperty } from '../../controllers/properties';

const router = express.Router();

// @route    Get api/properties/
// @desc     Get properties
// @access   Private
router.get(
    '/',
    // auth,
    getProperties,
);

// @route    Post api/properties/
// @desc     Create new property
// @access   Private
router.post(
    '/',
    // auth,
    createProperty,
);

export default router;

import express from 'express';
import auth from '../../middlewares/auth';
import { getProperties, getProperty, createProperty, updateProperty, deleteProperty } from '../../controllers/properties';

const router = express.Router();

// @route    Get api/properties/
// @desc     Get properties
// @access   Private
router.get(
    '/',
    // auth,
    getProperties,
);

// @route    Get api/properties/
// @desc     Get property
// @access   Private
router.get(
    '/:id',
    // auth,
    getProperty,
);

// @route    Post api/properties/
// @desc     Create new property
// @access   Private
router.post(
    '/',
    // auth,
    createProperty,
);

// @route    Put api/properties/
// @desc     Update  property
// @access   Private
router.put(
    '/',
    // auth,
    updateProperty,
);

// @route    Delete api/properties/
// @desc     Delete  property
// @access   Private
router.delete(
    '/:id',
    // auth,
    deleteProperty,
);

export default router;

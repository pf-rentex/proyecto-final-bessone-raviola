import express from 'express';
import auth from '../../middlewares/auth';
import {
    createShiftProperty,
    getShifts,
    getShift,
    deleteShift,
} from '../../controllers/shiftProperties';
import upload from '../../middlewares/upload';

const router = express.Router();

//@route    Post api/shiftProperties
//@desc     Create Shift
//@access   Private
router.post(
    '/',
    // auth,
    createShiftProperty,
);

//@route    Get api/shiftProperties/
//@desc     Get shifts
//@access   Private
router.get(
    '/',
    // auth,
    getShifts,
);

//@route    Get api/shiftProperties/:id
//@desc     Get shift
//@access   Private
router.get(
    '/:id',
    // auth,
    getShift,
);

//@route    Delete api/shiftProperties/:id
//@desc     Delete shift
//@access   Private
router.delete(
    '/:id',
    //auth,
    deleteShift,
);

export default router;

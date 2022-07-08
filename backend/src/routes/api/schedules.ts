import express from 'express';
import auth from '../../middlewares/auth';
import {
    createSchedule,
    getSchedules,
    getSchedule,
    updateSchedule,
    deleteSchedule,
} from '../../controllers/schedules';

const router = express.Router();

//@route    Post api/schedules
//@desc     Create Schedule
//@access   Private
router.post(
    '/',
    // auth,
    createSchedule,
);

//@route    Get api/schedules/
//@desc     Get Schedules
//@access   Private
router.get(
    '/',
    // auth,
    getSchedules,
);

//@route    Get api/schedules/:id
//@desc     Get Schedule
//@access   Private
router.get(
    '/:id',
    // auth,
    getSchedule,
);

//@route    Put api/schedules
//@desc     Update Schedule
//@access   Private
router.put(
    '/',
    // auth,
    updateSchedule,
);

//@route    Delete api/schedules/:id
//@desc     Delete Schedule
//@access   Private
router.delete(
    '/:id',
    //auth,
    deleteSchedule,
);

export default router;

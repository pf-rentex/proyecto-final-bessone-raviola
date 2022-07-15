import { Request, Response } from 'express';
import Schedule from '../models/schedule';

const createSchedule = async (req: Request, res: Response) => {
    const { propertyId, date, time, comments, status, userId } = req.body;

    //Simple validation
    if (!fieldsAreValid(req)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check existing Schedule
    const existingSchedule = await Schedule.findOne({
        propertyId: propertyId,
        date: date,
        time: time,
    });

    if (existingSchedule)
        return res.status(400).json({ msg: 'Schedule Already exists' });

    const newSchedule = new Schedule({
        propertyId,
        date,
        time,
        comments,
        status: status,
        userId,
    });

    //Create Schedule
    try {
        const schedule = await newSchedule.save();
        res.json({ schedule });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering schedule: ${error}` });
    }
};

const getSchedules = async (req: Request, res: Response) => {
    const schedules = await Schedule.find();
    res.json(schedules);
};

const getSchedule = async (req: Request, res: Response) => {
    const { id } = req.params;

    //Check for existing schedule
    const schedule = await Schedule.findOne({ _id: id });
    if (!schedule) {
        return res.status(400).json({ msg: 'The schedule does not exist' });
    } else {
        res.json(schedule);
    }
};

const updateSchedule = async (req: Request, res: Response) => {
    const { id, propertyId, date, time, comments, status, userId } = req.body;

    //Simple validation
    if (!fieldsAreValid(req)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing Schedule
    const existingSchedule = await Schedule.findOne({ _id: id });

    if (!existingSchedule) {
        return res.status(400).json({ msg: 'The Schedule does not exist' });
    } else {
        try {
            await Schedule.updateOne(
                { _id: id },
                {
                    propertyId: propertyId,
                    date: date,
                    time: time,
                    comments: comments,
                    status: status,
                    userId: userId,
                },
            );

            return res.status(200).json({ msg: 'Schedule updated' });
        } catch (error) {
            return res
                .status(400)
                .json({ msg: `Error registering schedule: ${error}` });
        }
    }
};

const deleteSchedule = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingSchedule = await Schedule.findOne({ _id: id });
    if (existingSchedule) {
        await existingSchedule.remove();
        return res.status(200).json({ msg: 'Schedule removed' });
    } else {
        return res.status(400).json({ msg: 'The schedule does not exist' });
    }
};

const fieldsAreValid = (req): boolean => {
    const { propertyId, date, time, comments, status, userId } = req.body;
    return (
        !!propertyId && !!date && !!time && !!comments && !!status && !!userId
    );
};

export {
    createSchedule,
    getSchedules,
    getSchedule,
    updateSchedule,
    deleteSchedule,
};

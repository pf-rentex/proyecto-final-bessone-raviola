import { Request, Response } from 'express';
import shiftProperty from '../models/shiftProperty';

const createShiftProperty = async (req: Request, res: Response) => {
    const { propertyId, date, time, comments, status, userId } = req.body;

    //Simple validation
    if (!fieldsAreValid(req)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check existing shift
    const existingShift = await shiftProperty.findOne({
        propertyId: propertyId,
        date: date,
        time: time,
    });

    if (existingShift)
        return res.status(400).json({ msg: 'Shift Already exists' });

    const newShift = new shiftProperty({
        propertyId,
        date,
        time,
        comments,
        status: status,
        userId,
    });

    //Create shift
    try {
        const shift = await newShift.save();
        res.json({ shift });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering shift: ${error}` });
    }
};

const getShifts = async (req: Request, res: Response) => {
    const shifts = await shiftProperty.find();
    res.json(shifts);
};

const getShift = async (req: Request, res: Response) => {
    const { id } = req.params;

    //Check for existing Shift
    const Shift = await shiftProperty.findOne({ _id: id });
    if (!Shift) {
        return res.status(400).json({ msg: 'The shift does not exist' });
    } else {
        res.json(Shift);
    }
};

const deleteShift = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingShift = await shiftProperty.findOne({ _id: id });
    if (existingShift) {
        await existingShift.remove();
        return res.status(200).json({ msg: 'Shift removed' });
    } else {
        return res.status(400).json({ msg: 'The shift does not exist' });
    }
};

const fieldsAreValid = (req): boolean => {
    const { propertyId, date, time, comments, status, userId } = req.body;
    return (
        !!propertyId && !!date && !!time && !!comments && !!status && !!userId
    );
};

export { createShiftProperty, getShifts, getShift, deleteShift };

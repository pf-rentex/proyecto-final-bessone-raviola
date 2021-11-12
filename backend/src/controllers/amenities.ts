import { Request, Response } from 'express';
import Amenities from '../models/amenities';

const getAmenities = async (req: Request, res: Response) => {
    const amenities = await Amenities.find();
    res.json(amenities);
};

const getAmenitiesById = async (req: Request, res: Response) => {
    const { id } = req.params;

    //Check for existing amenities
    const amenities = await Amenities.findOne({_id: id});
    if (!amenities) {
        return res.status(400).json({msg: "The Amenities does not exist"});
    } else {
        res.json(amenities);
    }
};

const createAmenities = async (req: Request, res: Response) => {
    const {icon, description} = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({msg: "Please enter all fields"});

    }

    //Check for existing amenities
    const existingAmenities = await Amenities.findOne({description: description});
    if (existingAmenities) return res.status(400).json({msg: "Amenities Already exists"});

    const newAmenities = new Amenities({
        icon,
        description,
    });

    //Create amenities
    try {
        const amenities = await newAmenities.save();
        res.json({amenities});

    } catch (error) {
        return res.status(400).json({msg: `Error registering amenities: ${error}`});
    }
};

const deleteAmenities = async (req: Request, res: Response) => {
    const {id} = req.params;

    const existingAmenities = await Amenities.findOne({_id: id});
    if (existingAmenities) {
        await existingAmenities.remove();
        return res.status(200).json({msg: "Amenities removed"});
    } else {
        return res.status(400).json({msg: "The amenities does not exist"});
    }
};

const fieldsAreValid = (body): boolean => {
    const {icon, description} = body;
    return !!icon && !!description;
};

export { getAmenities, getAmenitiesById, createAmenities, deleteAmenities };
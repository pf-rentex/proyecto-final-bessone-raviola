import { Request, Response } from 'express';
import Amenity from '../models/amenity';

const getAmenities = async (req: Request, res: Response) => {
    const amenities = await Amenity.find();
    res.json(amenities);
};

const getAmenityById = async (req: Request, res: Response) => {
    const { id } = req.params;

    //Check for existing amenity
    const amenity = await Amenity.findOne({_id: id});
    if (!amenity) {
        return res.status(400).json({msg: "The Amenity does not exist"});
    } else {
        res.json(amenity);
    }
};

const createAmenity = async (req: Request, res: Response) => {
    const {icon, description} = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({msg: "Please enter all fields"});

    }

    //Check for existing amenity
    const existingAmenity = await Amenity.findOne({description: description});
    if (existingAmenity) return res.status(400).json({msg: "Amenity Already exists"});

    const newAmenity = new Amenity({
        icon,
        description,
    });

    //Create amenity
    try {
        const amenity = await newAmenity.save();
        res.json({amenity});

    } catch (error) {
        return res.status(400).json({msg: `Error registering amenity: ${error}`});
    }
};

const deleteAmenity = async (req: Request, res: Response) => {
    const {id} = req.params;

    const existingAmenity = await Amenity.findOne({_id: id});
    if (existingAmenity) {
        await existingAmenity.remove();
        return res.status(200).json({msg: "Amenity removed"});
    } else {
        return res.status(400).json({msg: "The amenity does not exist"});
    }
};

const fieldsAreValid = (body): boolean => {
    const {icon, description} = body;
    return !!icon && !!description;
};

export { getAmenities, getAmenityById, createAmenity, deleteAmenity };
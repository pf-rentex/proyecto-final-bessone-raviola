import { Request, Response } from 'express';
import rentalRequest from '../models/rentalRequest';

const createRentalRequest = async (req: Request, res: Response) => {
    const {
        userId,
        name,
        lastname,
        email,
        dni,
        birthDate,
        phone,
        comments,
        dateStart,
        dateEnd,
        propertyId,
    } = req.body;

    //Simple validation
    if (!fieldsAreValid(req.body)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing rentalRequest
    const existingRentalRequest = await rentalRequest.findOne({
        propertyId: propertyId,
    });
    if (existingRentalRequest)
        return res.status(400).json({ msg: 'Rental Request Already exists' });

    const newRentalRequest = new rentalRequest({
        userId,
        name,
        lastname,
        email,
        dni,
        birthDate,
        phone,
        comments,
        dateStart,
        dateEnd,
        status: 'pending',
        propertyId,
    });

    //Create RentalRequest
    try {
        const rentalRequest = await newRentalRequest.save();
        res.json({ rentalRequest });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering rental request: ${error}` });
    }
};

const getRentalRequests = async (req: Request, res: Response) => {
    const rentalRequests = await rentalRequest.find();
    res.json(rentalRequests);
};

const getRentalRequestById = async (req: Request, res: Response) => {
    const { id } = req.params;

    //Check for existing rentalRequest
    const request = await rentalRequest.findOne({ _id: id });
    if (!request) {
        const request = await rentalRequest.findOne({ userId: id });
        if (!request) {
            const request = await rentalRequest.findOne({ propertyId: id });
            if (!request) {
                return res
                    .status(400)
                    .json({ msg: 'The Rental Request does not exist' });
            } else {
                res.json(request);
            }
        } else {
            res.json(request);
        }
    } else {
        res.json(request);
    }
};

const deleteRentalRequest = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingRentalRequest = await rentalRequest.findOne({ _id: id });
    if (existingRentalRequest) {
        await existingRentalRequest.remove();
        return res.status(200).json({ msg: 'Rental Request removed' });
    } else {
        return res
            .status(400)
            .json({ msg: 'The rental request does not exist' });
    }
};

const fieldsAreValid = (body): boolean => {
    const {
        userId,
        name,
        lastname,
        email,
        dni,
        birthDate,
        phone,
        dateStart,
        dateEnd,
        propertyId,
    } = body;
    return (
        !!userId &&
        !!name &&
        !!lastname &&
        !!email &&
        !!dni &&
        !!birthDate &&
        !!phone &&
        !!dateStart &&
        !!dateEnd &&
        !!propertyId
    );
};

const uploadFile = async (req: Request, res: Response) => {
    res.json({ file: req.file });
};

export {
    createRentalRequest,
    getRentalRequests,
    getRentalRequestById,
    deleteRentalRequest,
    uploadFile,
};

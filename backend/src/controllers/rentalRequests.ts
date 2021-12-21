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
        startDate,
        endDate,
        propertyId,
    } = req.body;

    //Simple validation
    if (!fieldsAreValid(req)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing rentalRequest
    const existingRentalRequest = await rentalRequest.findOne({
        propertyId: propertyId,
    });
    if (existingRentalRequest)
        return res.status(400).json({ msg: 'Rental Request Already exists' });

    // @ts-ignore
    const guarantorFiles = req.files.guarantorFiles.map((file: any) => {
        return file.id;
    });
    // @ts-ignore
    const dniFiles = req.files.dniFiles.map((file: any) => {
        return file.id;
    });
    // @ts-ignore
    const receiptFiles = req.files.receiptFiles.map((file: any) => {
        return file.id;
    });
    // @ts-ignore
    const debtFreeFiles = req.files.debtFreeFiles.map((file: any) => {
        return file.id;
    });

    const newRentalRequest = new rentalRequest({
        userId,
        name,
        lastname,
        email,
        dni,
        birthDate,
        phone,
        comments,
        startDate,
        endDate,
        status: 'pending',
        propertyId,
        guarantorFiles,
        dniFiles,
        receiptFiles,
        debtFreeFiles,
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

const fieldsAreValid = (req): boolean => {
    const {
        userId,
        name,
        lastname,
        email,
        dni,
        birthDate,
        phone,
        startDate,
        endDate,
        propertyId,
    } = req.body;
    const { guarantorFiles, dniFiles } = req.files;
    return (
        !!userId &&
        !!name &&
        !!lastname &&
        !!email &&
        !!dni &&
        !!birthDate &&
        !!phone &&
        !!startDate &&
        !!endDate &&
        !!propertyId &&
        !!guarantorFiles &&
        !!dniFiles
    );
};

export {
    createRentalRequest,
    getRentalRequests,
    getRentalRequestById,
    deleteRentalRequest,
};

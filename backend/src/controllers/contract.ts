import { Request, Response } from 'express';
import Contract from '../models/contract';

const createContract = async (req: Request, res: Response) => {
    const {
        contractNumber,
        startDate,
        endDate,
        expenses,
        monthlyFee,
        status,
        typeOfRental,
        propertyId,
        rentalEstateId,
        userId,
        tenantId,
    } = req.body;

    //Simple validation
    if (!fieldsAreValid(req)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing Contract
    const existingContract = await Contract.findOne({
        contractNumber: contractNumber,
    });
    if (existingContract)
        return res.status(400).json({ msg: 'Contract Already exists' });

    // @ts-ignore
    const guarantorFiles = req.files.guarantorFiles.map((file: any) => {
        return file.id;
    });
    // @ts-ignore
    const dniFiles = req.files.dniFiles.map((file: any) => {
        return file.id;
    });

    const newContract = new Contract({
        contractNumber,
        startDate,
        endDate,
        expenses,
        monthlyFee,
        status: status,
        typeOfRental,
        propertyId,
        rentalEstateId,
        userId,
        tenantId,
        guarantorFiles,
        dniFiles,
    });

    //Create contract
    try {
        const contract = await newContract.save();
        res.json({ contract });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering contract: ${error}` });
    }
};

const getContracts = async (req: Request, res: Response) => {
    const contracts = await Contract.find();
    res.json(contracts);
};

const getContract = async (req: Request, res: Response) => {
    const { id } = req.params;

    //Check for existing contract
    const contract = await Contract.findOne({ _id: id });
    if (!contract) {
        return res.status(400).json({ msg: 'The Contract does not exist' });
    } else {
        res.json(contract);
    }
};

const deleteContract = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingContract = await Contract.findOne({ _id: id });
    if (existingContract) {
        await existingContract.remove();
        return res.status(200).json({ msg: 'Contract removed' });
    } else {
        return res.status(400).json({ msg: 'The contract does not exist' });
    }
};

const fieldsAreValid = (req): boolean => {
    const {
        contractNumber,
        startDate,
        endDate,
        expenses,
        monthlyFee,
        status,
        typeOfRental,
        propertyId,
        rentalEstateId,
        userId,
        tenantId,
    } = req.body;
    const { guarantorFiles, dniFiles } = req.files;
    return (
        !!contractNumber &&
        !!startDate &&
        !!endDate &&
        !!expenses &&
        !!monthlyFee &&
        !!status &&
        !!typeOfRental &&
        !!propertyId &&
        !!rentalEstateId &&
        !!userId &&
        !!tenantId &&
        !!guarantorFiles &&
        !!dniFiles
    );
};

export { createContract, getContracts, getContract, deleteContract };

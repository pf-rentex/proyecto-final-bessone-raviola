import { Request, Response } from 'express';
import Claim from '../models/claim';

const createClaim = async (req: Request, res: Response) => {
    const {
        title,
        description,
        category,
        status,
        dateUpload,
        dateVisit,
        address,
        technical,
        propertyId,
        userId,
    } = req.body;
    //Simple validation
    if (!fieldsAreValid(req)) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // @ts-ignore
    const picturesClaim = req.files.picturesClaim.map((file: any) => {
        return file.id;
    });

    const newClaim = new Claim({
        title,
        description,
        category,
        status,
        dateUpload,
        dateVisit,
        address,
        technical,
        propertyId,
        userId,
        picturesClaim,
    });

    //Create Claim
    try {
        const claim = await newClaim.save();
        res.json({ claim });
    } catch (error) {
        return res
            .status(400)
            .json({ msg: `Error registering claim: ${error}` });
    }
};

const getclaims = async (req: Request, res: Response) => {
    const claims = await Claim.find();
    res.json(claims);
};

const getClaim = async (req: Request, res: Response) => {
    const { id } = req.params;

    //Check for existing claim
    const claim = await Claim.findOne({ _id: id });
    if (!claim) {
        return res.status(400).json({ msg: 'The Claim does not exist' });
    } else {
        res.json(claim);
    }
};

const deleteClaim = async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingClaim = await Claim.findOne({ _id: id });
    if (existingClaim) {
        await existingClaim.remove();
        return res.status(200).json({ msg: 'Claim removed' });
    } else {
        return res.status(400).json({ msg: 'The claim does not exist' });
    }
};

const fieldsAreValid = (req): boolean => {
    const {
        title,
        description,
        category,
        status,
        dateUpload,
        dateVisit,
        address,
        technical,
        propertyId,
        userId,
    } = req.body;
    const { picturesClaim } = req.files;
    return (
        !!title &&
        !!description &&
        !!category &&
        !!status &&
        !!dateUpload &&
        !!dateVisit &&
        !!address &&
        !!technical &&
        !!propertyId &&
        !!userId &&
        !!picturesClaim
    );
};

export { createClaim, getclaims, getClaim, deleteClaim };

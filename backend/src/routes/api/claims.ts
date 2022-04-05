import express from 'express';
import auth from '../../middlewares/auth';
import {
    createClaim,
    getclaims,
    getClaim,
    updateClaim,
    deleteClaim,
} from '../../controllers/claims';
import upload from '../../middlewares/upload';

const router = express.Router();

//@route    Post api/claims
//@desc     Create Claim
//@access   Private
router.post(
    '/',
    // auth,
    upload.fields([{ name: 'claimPictures' }]),
    createClaim,
);

//@route    Get api/claims/
//@desc     Get claims
//@access   Private
router.get(
    '/',
    // auth,
    getclaims,
);

//@route    Get api/claims/:id
//@desc     Get Claim
//@access   Private
router.get(
    '/:id',
    // auth,
    getClaim,
);

//@route    Put api/claims
//@desc     Update Claim
//@access   Private
router.put(
    '/',
    // auth,
    upload.fields([{ name: 'claimPictures' }]),
    updateClaim,
);

//@route    Delete api/claims/:id
//@desc     Delete Claims
//@access   Private
router.delete(
    '/:id',
    //auth,
    deleteClaim,
);

export default router;

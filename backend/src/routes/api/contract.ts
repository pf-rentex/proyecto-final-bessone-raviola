import express from 'express';
import auth from '../../middlewares/auth';
import {
    createContract,
    getContracts,
    getContract,
    deleteContract,
} from '../../controllers/contract';
import upload from '../../middlewares/upload';

const router = express.Router();

//@route    Post api/constracts
//@desc     Create Contract
//@access   Private
router.post(
    '/',
    // auth,
    upload.fields([{ name: 'guarantorFiles' }, { name: 'dniFiles' }]),
    createContract,
);

//@route    Get api/constracts/
//@desc     Get constracts
//@access   Private
router.get(
    '/',
    // auth,
    getContracts,
);

//@route    Get api/constracts/:id
//@desc     Get Contract
//@access   Private
router.get(
    '/:id',
    // auth,
    getContract,
);

//@route    Delete api/constracts/:id
//@desc     Delete Constract
//@access   Private
router.delete(
    '/:id',
    //auth,
    deleteContract,
);

export default router;

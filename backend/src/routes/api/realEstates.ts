import express from 'express';
import auth from '../../middlewares/auth';
import {
    create,
    deleteOne,
    getOne,
    getAll,
    updateOne,
} from '../../controllers/realEstates';

const router = express.Router();

// @route    Post api/realEstates
// @desc     Register new realEstate
// @access   Public
router.post('/', create);

// @route    Get api/realEstates/
// @desc     Search realEstates
// @access   Public
router.get('/', getAll);

// @route    Get api/realEstates/:cuit
// @desc     Search realEstate
// @access   Public
router.get('/:cuit', getOne);

// @route    Put api/realEstates
// @desc     Modify realEstate
// @access   Private
router.put('/', auth, updateOne);

// @route    Delete api/realEstates/:id
// @desc     Delete realEstate
// @access   Private
router.delete('/:id', auth, deleteOne);

export default router;

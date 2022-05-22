import express from 'express';
import auth from '../../middlewares/auth';
import {
    create, deleteOne, getAll, getOne, updateOne,
} from '../../controllers/owners';

const router = express.Router();

// @route    Post api/owners
// @desc     Register new owner
// @access   Public
router.post('/', create);

// @route    Get api/owners
// @desc     Search owners
// @access   Public
router.get('/', getAll);

// @route    Get api/owners/:cuit
// @desc     Search owner
// @access   Public
router.get('/:cuit', getOne);

// @route    Put api/owners
// @desc     Modify owner
// @access   Private
router.put('/', auth, updateOne);

// @route    Delete api/owners/:id
// @desc     Delete owner
// @access   Public
router.delete('/:id', auth, deleteOne);

export default router;

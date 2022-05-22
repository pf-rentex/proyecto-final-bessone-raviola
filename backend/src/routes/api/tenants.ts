import express from 'express';
import auth from '../../middlewares/auth';
import {
    create, deleteOne, getOne, getAll, updateOne,
} from '../../controllers/tenants';

const router = express.Router();

// @route    Post api/tenants
// @desc     Create tenant
// @access   Public
router.post('/', create);

// @route    Get api/tenants/
// @desc     Get tenants
// @access   Public
router.get('/', getAll);

// @route    Get api/tenants/:dni
// @desc     Get tenant
// @access   Public
router.get('/:dni', getOne);

// @route    Put api/tenants
// @desc     Modify tenant
// @access   Private
router.put('/', auth, updateOne);

// @route    Delete api/tenants/:id
// @desc     Delete tenant
// @access   Private
router.delete('/:id', auth, deleteOne);

export default router;

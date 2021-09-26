import express from 'express';
import auth from '../../middlewares/auth';
import { getUser, authenticateUser } from '../../controllers/auth';

const router = express.Router();

//@route    Post api/auth
//@desc     Authenticate user
//@access   Public
router.post('/', authenticateUser);

//@route    Get api/auth/user
//@desc     Get user data
//@access   Private
router.get('/user', auth, getUser);

export default router;

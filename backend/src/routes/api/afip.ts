import express from 'express';
import auth from '../../middlewares/auth';
import checkContributor from '../../controllers/afip';

const router = express.Router();

// @route    Post api/afip/check_contributor
// @desc     Check if contributor is registered in AFIP
// @access   Private
router.post('/check_contributor', auth, checkContributor);

export default router;

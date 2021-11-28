import express from 'express';
import users from './api/users';
import auth from './api/auth';
import authMiddleware from '../middlewares/auth';
import tenants from './api/tenants';
import owners from './api/owners';
import realEstates from './api/realEstates';
import properties from './api/properties';
import afip from './api/afip';
import amenities from './api/amenities';
import publications from './api/publications';
import rentalRequests from './api/rentalRequests';

const router = express.Router();

router.use('/api/users', users);
router.use('/api/auth', auth);
router.use('/api/tenants', authMiddleware, tenants);
router.use('/api/owners', authMiddleware, owners);
router.use('/api/realEstates', authMiddleware, realEstates);
router.use('/api/properties', properties);
router.use('/api/afip', afip);
router.use('/api/amenities', amenities);
router.use('/api/publications', publications);
router.use('/api/rentalRequests', rentalRequests);

export default router;

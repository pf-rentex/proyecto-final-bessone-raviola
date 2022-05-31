import express from 'express';
import auth from './api/auth';
import tenants from './api/tenants';
import owners from './api/owners';
import realEstates from './api/realEstates';
import properties from './api/properties';
import afip from './api/afip';
import amenities from './api/amenities';
import publications from './api/publications';
import rentalRequests from './api/rentalRequests';
import claims from './api/claims';
import contracts from './api/contract';

const router = express.Router();

router.use('/api/auth', auth);
router.use('/api/tenants', tenants);
router.use('/api/owners', owners);
router.use('/api/realEstates', realEstates);
router.use('/api/properties', properties);
router.use('/api/afip', afip);
router.use('/api/amenities', amenities);
router.use('/api/publications', publications);
router.use('/api/rentalRequests', rentalRequests);
router.use('/api/claims', claims);
router.use('/api/contracts', contracts);

export default router;

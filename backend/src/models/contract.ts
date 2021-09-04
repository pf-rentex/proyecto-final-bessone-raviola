import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema({
    contractNumber: Number,
    startDate: Date,
    endDate: Date,
    expenses: Number,
    monthlyFee: Number,
    status: String,
    propertyId: Number,
    tenantId: Number,
    rentalAgentId: Number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const Contract = mongoose.model( 'Contract', contractSchema);
export default Contract;
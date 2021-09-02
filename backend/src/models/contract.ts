import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema({
    contractNumber: Number,
    startDate: Date,
    endDate: Date,
    expenses: Number,
    monthlyFee: Number,
    status: String,
    property: {
        propertyId: Number
    },
    tenant: {
        tenantId: Number
    },
    rentalAgent: {
        rentalAgentId: Number
    }
});

const Contract = mongoose.model( 'Contract', contractSchema);
export default Contract;
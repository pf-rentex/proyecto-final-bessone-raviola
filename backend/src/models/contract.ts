import mongoose, { Schema } from 'mongoose';

const contractSchema = new mongoose.Schema(
    {
        contractNumber: {
            type: Number,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        expenses: {
            type: Number,
            required: true,
        },
        monthlyFee: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['active', 'cancelled'],
            default: 'active',
        },
        typeOfRental: {
            type: String,
            enum: ['permanent', 'temporary'],
            default: 'permanent',
        },
        propertyId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        rentalEstateId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        dni: {
            type: Number,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        guarantorFiles: {
            type: Array,
        },
        dniFiles: {
            type: Array,
        },
    },
    {
        timestamps: true,
    },
);

const Contract = mongoose.model('Contract', contractSchema);
export default Contract;

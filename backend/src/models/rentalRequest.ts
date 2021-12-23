import mongoose, { Schema } from 'mongoose';

const rentalRequestSchema = new mongoose.Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        lastName: {
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
        comments: {
            type: String,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ['approved', 'pending', 'cancelled'],
            default: 'pending',
        },
        propertyId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        guarantorFiles: {
            type: Array,
        },
        dniFiles: {
            type: Array,
        },
        receiptFiles: {
            type: Array,
        },
        debtFreeFiles: {
            type: Array,
        },
        // fileCuit: {
        //     data: Buffer,
        // },
    },
    {
        timestamps: true,
    },
);

const rentalRequest = mongoose.model('RentalRequest', rentalRequestSchema);
export default rentalRequest;

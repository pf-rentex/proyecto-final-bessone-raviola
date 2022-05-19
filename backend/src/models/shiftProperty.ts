import mongoose, { Schema } from 'mongoose';

const shiftPropertySchema = new mongoose.Schema(
    {
        propertyId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        // Ver como hacer lo de la hora mas que todo
        Date: {
            type: Date,
            required: true,
        },
        Time: {
            type: Date,
            required: true,
        },
        comments: {
            type: String,
        },
        status: {
            type: String,
            enum: ['approved', 'pending', 'cancelled'],
            default: 'pending',
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const shiftProperty = mongoose.model('ShiftProperty', shiftPropertySchema);
export default shiftProperty;

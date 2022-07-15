import mongoose, { Schema } from 'mongoose';

const scheduleSchema = new mongoose.Schema(
    {
        propertyId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        comments: {
            type: String,
        },
        status: {
            type: String,
            enum: ['Approved', 'Pending', 'Cancelled'],
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

const schedule = mongoose.model('Schedule', scheduleSchema);
export default schedule;

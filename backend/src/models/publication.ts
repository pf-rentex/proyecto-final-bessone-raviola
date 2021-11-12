import mongoose, { Schema } from 'mongoose';

const publicationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        propertyId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        status: {
            type: Boolean,
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
    },
    {
        timestamps: true,
    },
);

const Publication = mongoose.model('Publication', publicationSchema);
export default Publication;
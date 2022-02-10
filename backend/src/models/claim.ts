import mongoose, { Schema } from 'mongoose';

const claimSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['electricity', 'plumbing', 'gas', 'various'],
            default: 'various',
        },
        status: {
            type: String,
            enum: ['Solved', 'InProgress', 'cancelled', 'pending'],
            default: 'pending',
        },
        dateUpload: {
            type: Date,
            required: true,
        },
        dateVisit: {
            type: Date,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        technical: {
            type: String,
            required: true,
        },
        propertyId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        picturesClaim: {
            type: Array,
        },
    },
    {
        timestamps: true,
    },
);

const Claim = mongoose.model('Claim', claimSchema);
export default Claim;

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
            enum: [
                'Electricity',
                'Plumbing',
                'Gas',
                'Infrastructure',
                'Various',
            ],
            default: 'various',
        },
        status: {
            type: String,
            enum: ['Addressed', 'InProgress', 'Cancelled', 'Pending'],
            default: 'pending',
        },
        dateVisit: {
            type: Date,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        technician: {
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

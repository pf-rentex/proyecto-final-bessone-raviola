import mongoose from 'mongoose';
import Features from './features';

const propertySchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
        },
        // deed: {
        //     type: File,
        //     required: true,
        // },
        description: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        // features: {
        //     type: [Features],
        //     required: true,
        // },
        // pictures: {
        //     type: [File],
        //     required: true,
        // },
        // rentalAgentId: {
        //     type: Number,
        //     required: true,
        // },
    },
    {
        timestamps: true,
    },
);

const Property = mongoose.model('Property', propertySchema);
export default Property;

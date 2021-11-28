import mongoose, { Schema } from 'mongoose';

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
        expensesPrice: {
            type: Number,
            required: true,
        },
        ownerId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        features: [
            {
                description: {
                    type: String,
                },
            },
        ],
        amenities: [
            {
                amenitiesId : {
                    type: Schema.Types.ObjectId,
                    required: true,
                },
                amount: {
                    type: Number,
                    nullable: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    },
);

const Property = mongoose.model('Property', propertySchema);
export default Property;
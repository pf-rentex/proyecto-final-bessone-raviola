import mongoose, { Schema } from 'mongoose';

const amenitiesSchema = new mongoose.Schema(
    {
        icon: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const Amenities = mongoose.model( 'Amenities', amenitiesSchema);
export default Amenities;
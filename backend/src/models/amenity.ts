import mongoose, { Schema } from 'mongoose';

const amenitySchema = new mongoose.Schema(
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

const Amenity = mongoose.model( 'Amenity', amenitySchema);
export default Amenity;
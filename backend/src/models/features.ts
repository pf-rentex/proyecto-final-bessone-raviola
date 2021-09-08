import mongoose from 'mongoose';

const featuresSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const Features = mongoose.model( 'Features', featuresSchema);
export default Features;
import mongoose from 'mongoose';
import Features from './features';

const propertySchema = new mongoose.Schema({
    address: String,
    deed: File,
    description: String,
    features: [Features],
    pictures: [File],
    rentalAgentId: Number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const Property = mongoose.model( 'Property', propertySchema);
export default Property;
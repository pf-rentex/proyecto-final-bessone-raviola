import mongoose from 'mongoose';

const featuresSchema = new mongoose.Schema({
    description: String
});

const Features = mongoose.model( 'Features', featuresSchema);
export default Features;
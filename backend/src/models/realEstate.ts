import  mongoose  from "mongoose";

const realEstateSchema =  new mongoose.Schema({
    ownerName: String,
    ownerLastname: String,
    ownerDni: Number,
    address: String,
    phone: Number,
    cuit: Number,
    email: String,
    businessName: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const RealEstate = mongoose.model( 'RealEstate', realEstateSchema);
export default RealEstate;
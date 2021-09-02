import  mongoose  from "mongoose";

const realEstateSchema =  new mongoose.Schema({
    nameOwner: String,
    lastnameOwner: String,
    dniOwner: Number,
    address: String,
    phone: Number,
    cuit: Number,
    email: String,
    businessName: String
});

const RealEstate = mongoose.model( 'RealEstate', realEstateSchema);
export default RealEstate;
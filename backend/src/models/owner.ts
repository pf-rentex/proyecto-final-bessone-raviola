import  mongoose  from "mongoose";

const ownerSchema =  new mongoose.Schema({
    name: String,
    lastName: String,
    address: String,
    phone: Number,
    dni: Number,
    cuit: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const Owner = mongoose.model( 'Owner', ownerSchema);
export default Owner;
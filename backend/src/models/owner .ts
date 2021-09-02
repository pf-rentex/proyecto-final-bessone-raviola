import  mongoose  from "mongoose";

const ownerSchema =  new mongoose.Schema({
    name: String,
    lastname: String,
    address: String,
    phone: Number,
    dni: Number,
    cuit: Number,
    email: String,
});

const Owner = mongoose.model( 'Owner', ownerSchema);
export default Owner;
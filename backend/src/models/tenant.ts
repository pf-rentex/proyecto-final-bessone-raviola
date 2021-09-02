import mongoose from 'mongoose';

const tenantSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    birthdate: Date,
    dni: Number,
    address: String,
    email: String,
    phone: String
});

const Tenant = mongoose.model( 'Tenant', tenantSchema);
export default Tenant;
import mongoose from 'mongoose';

const tenantSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    birthDate: Date,
    dni: Number,
    address: String,
    email: String,
    phone: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const Tenant = mongoose.model( 'Tenant', tenantSchema);
export default Tenant;
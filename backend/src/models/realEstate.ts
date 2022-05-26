import  mongoose  from "mongoose";

const realEstateSchema =  new mongoose.Schema({
        ownerName: {
            type: String,
            required: true,
        },
        ownerLastname: {
            type: String,
            required: true,
        },
        ownerDni: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        cuit: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        businessName: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const RealEstate = mongoose.model( 'RealEstate', realEstateSchema);
export default RealEstate;
import  mongoose  from "mongoose";

const ownerSchema =  new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required:true,
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        dni: {
            type: Number,
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
    },
    {
        timestamps: true,
    }
);

const Owner = mongoose.model( 'Owner', ownerSchema);
export default Owner;
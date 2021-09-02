import  mongoose  from "mongoose";

const rentalAgentSchema =  new mongoose.Schema({
    isVerified: Boolean,
    owner: {
        ownerId: Number
    },
    realEstate: {
        realEstateId: Number
    }
});

const RentalAgent = mongoose.model( 'RentalAgent', rentalAgentSchema);
export default RentalAgent;
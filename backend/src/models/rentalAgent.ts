import  mongoose  from "mongoose";

const rentalAgentSchema =  new mongoose.Schema({
    isVerified: Boolean,
    ownerId: Number,
    realEstateId: Number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const RentalAgent = mongoose.model( 'RentalAgent', rentalAgentSchema);
export default RentalAgent;
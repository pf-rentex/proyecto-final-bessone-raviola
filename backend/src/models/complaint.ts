import  mongoose  from "mongoose";

const complaintSchema =  new mongoose.Schema({
    description: String,
    status: String,
    startDate: Date,
    endDate: Date,
    amount: Number,
    contractId: Number, 
    propertyId: Number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const Complaint = mongoose.model( 'Complaint', complaintSchema);
export default Complaint;
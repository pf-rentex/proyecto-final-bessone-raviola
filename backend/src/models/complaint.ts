import  mongoose  from "mongoose";

const complaintSchema =  new mongoose.Schema({
    description: String,
    status: String,
    startDate: Date,
    endDate: Date,
    amount: Number,
    contract: {
        contractId: Number
    },
    property: {
        propertyId: Number
    }
});

const Complaint = mongoose.model( 'Complaint', complaintSchema);
export default Complaint;
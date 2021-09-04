import  mongoose  from "mongoose";

const paymentSchema =  new mongoose.Schema({
    description: String,
    status: String,
    paymentDate: Date,
    amount: Number,
    contractId: Number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
});

const Payment = mongoose.model( 'Payment', paymentSchema);
export default Payment;
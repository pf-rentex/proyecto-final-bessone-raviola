import  mongoose  from "mongoose";

const paymentSchema =  new mongoose.Schema({
    description: String,
    status: String,
    paymentDate: Date,
    amount: Number,
    contract: {
        contractId: Number
    },
});

const Payment = mongoose.model( 'Payment', paymentSchema);
export default Payment;
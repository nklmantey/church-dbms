import mongoose from "mongoose";

const financeSchema = mongoose.Schema({
    financeType: String,
    totalAmount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date()
    },
});

const financeModel = mongoose.model('financeModel', financeSchema);

export default financeModel
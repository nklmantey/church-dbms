const mongoose = require("mongoose");

const financeSchema = mongoose.Schema({
    financeType: {
        type: String,
        required: [true, 'please provide a type']
    },
    totalAmount: {
        type: Number,
        default: 0,
        required: [true, 'please provide a total amount']
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('financeModel', financeSchema);
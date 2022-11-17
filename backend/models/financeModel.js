const mongoose = require("mongoose");

const financeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
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
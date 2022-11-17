const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userEmail: {
        type: String,
        required: [true, 'please provide an email address'],
        unique: true
    },
    userPwd: {
        type: String,
        required: [true, 'please provide a password']
    }
}, 
{
    timestamps: true
}
);

module.exports = mongoose.model('userModel', userSchema)
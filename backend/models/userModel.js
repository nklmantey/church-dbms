const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please provide a username'],
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
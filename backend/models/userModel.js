import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide a username"],
        unique: [true, 'this username already exists']
    },
    password: {
        type: String,
        required: [true, "please provide a password"],
        unique: [false]
    },
})

const userModel = mongoose.model.users || mongoose.model('users', userSchema);

export default userModel
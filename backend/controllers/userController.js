const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// @description: create a new user to db
const createUser = asyncHandler(async (req, res) => {
    const { username, userPwd } = req.body

    if(!username || !userPwd) {
        res.status(400)
        throw new Error('please fill in all fields')
    }

    //check if user exists
    const userExists = await userModel.findOne({username})

    if(userExists) {
        res.status(400)
        throw new Error('user already exists') 
    }

    //hashing userPwd
    const salt = await bcrypt.genSalt(10)
    const hasheduserPwd = await bcrypt.hash(userPwd, salt)

    //create the new user
    const user = await userModel.create({
        username,
        userPwd: hasheduserPwd,
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }

   res.json({ message: 'created user successfully'})
})

// @description: authenticate a user
const loginUser = asyncHandler(async (req, res) => {
    const { username, userPwd } = req.body

    //match user by email 
    const user = await userModel.findOne({username})

    if(user && (bcrypt.compare(userPwd, user.userPwd))) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            token: generateToken(user._id),
            message: 'successfully logged in'
        })
    } else {
        res.status(400)
        throw new Error('invalid credentials')
    }
    
    res.json({ message: 'login user successfully'})
 })

 // @description: get a user's data
const getUserData = asyncHandler(async (req, res) => {
    const { _id, username } = await userModel.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username
    })
 })

 //generate jwt 
const generateToken = (id) => {
    return jwt.sign(
        { id }, 
        process.env.JWT_SECRET_KEY,
        { expiresIn: '30d', }
    )

}

module.exports = { createUser, loginUser, getUserData } 
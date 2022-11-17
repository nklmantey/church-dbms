const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
           //get token from header
           token = req.headers.authorization.split(' ')[1]
           
           //token verification
           const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

           //retrieve user from token
           req.user = await userModel.findById(decoded.id).select('-password')

           next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('not authoried')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('not authorized, no token')
    }
})

module.exports = { protect }
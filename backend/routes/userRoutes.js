const express = require('express')
const router = express.Router()
const { createUser, loginUser, getUserData } = require('../controllers/userController') 

//match routes to controllers
// for ('/register') route
router.post('/', createUser)
router.post('/login', loginUser)
router.get('/me', getUserData)

module.exports = router
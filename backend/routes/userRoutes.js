const express = require('express')
const router = express.Router()
const { createUser, loginUser, getUserData } = require('../controllers/userController') 
const { protect } = require('../middleware/authMiddleware')

//match routes to controllers
// for ('/register') route
router.post('/', createUser)
router.post('/login', loginUser)
router.get('/me', protect, getUserData)

module.exports = router
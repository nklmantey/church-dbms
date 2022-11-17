const express = require('express')
const router = express.Router()
const { getFinance, createFinance, updateFinance, deleteFinance } = require('../controllers/financeController') 
const { protect } = require('../middleware/authMiddleware')

//match routes to controllers
// for ('/') route
router.route('/')
    .get(protect, getFinance)
    .post(protect, createFinance)

//for ('/:id') route
router.route('/:id')
    .put(protect, updateFinance)
    .delete(protect, deleteFinance)

module.exports = router
const express = require('express')
const router = express.Router()
const { getFinance, createFinance, updateFinance, deleteFinance } = require('../controllers/financeController') 

//match routes to controllers
// for ('/') route
router.route('/')
    .get(getFinance)
    .post(createFinance)

//for ('/:id') route
router.route('/:id')
    .put(updateFinance)
    .delete(deleteFinance)

module.exports = router
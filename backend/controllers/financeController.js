const financeModel = require('../models/financeModel.js')

// @description: get all the finannce records from db
const getFinance = async (req, res) => {
    const finances = await financeModel.find()

    res.status(200).json(finances)
}

// @description: create a new finance record to db
const createFinance = async (req, res) => {
   if(!req.body.financeType || !req.body.totalAmount) {
    res.status(404).json({
        message: 'please fill in all fields'
    })
   }

   const newFinance = await financeModel.create({
    financeType: req.body.financeType,
    totalAmount: req.body.totalAmount,
   })

    res.status(200).json(newFinance)
}

// @description: update a finance record by ID
const updateFinance = async (req, res) => {
    const financeToUpdate = await financeModel.findById(req.params.id)

    if(!financeToUpdate) {
        res.status(400).json({ 
            message: 'finance record not found'
        })
    }

    const updatedFinanceRecord = await financeModel.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedFinanceRecord)
}

// @description: delete a finance record by ID
const deleteFinance = async (req, res) => {
    const financeToDelete = await financeModel.findById(req.params.id)

    if(!financeToDelete) {
        res.status(400).json({
            message: 'finance record not found'
        })
    }

   await financeToDelete.remove()

    res.status(200).json({ id: req.params.id })
}

module.exports = { getFinance, createFinance, updateFinance, deleteFinance } 
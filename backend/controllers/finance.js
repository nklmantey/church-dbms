import financeModel from "../models/financeModel.js"

export const getFinanceData = async (req, res) => {
    try {
        const allFinanceData = await financeModel.find();
        console.log(allFinanceData);
        res.status(200).json(allFinanceData);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const addFinanceData = async (req, res) => {
    const financeData = req.body;
    const newFinanceData = new financeModel(financeData);

    try {
        await newFinanceData.save();
        res.status(201).json(newFinanceData);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}
import express from 'express';

//controllers for route
import { getFinanceData, addFinanceData } from '../controllers/finance.js';

const router = express.Router();

router.get('/', getFinanceData);
router.get('/', addFinanceData);

export default router;
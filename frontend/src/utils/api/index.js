import axios from 'axios';

const url = 'http://localhost:3000/finance';

export const fetchFinanceData = () => axios.get(url)
export const createFinanceData = (newFinanceData) => axios.post(url, newFinanceData)
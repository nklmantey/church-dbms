import * as api from '../api'

export const fetchFinanceData = () => async(dispatch) => {
    try {
        const { data } = await api.fetchFinanceData();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createFinanceData = (finance) => async(dispatch) => {
    try {
        const { data } = await api.createFinanceData(finance);
         dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
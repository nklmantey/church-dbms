export default (finance = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...finance, action.payload];
        default:
            return finance;
    }
}
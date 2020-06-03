const initialState = {
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    returnDate: '',
    numberOfPassenger: '',
    passengerType: '',
    flyType: '',
    isOneWay: '',
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'DEPARTURE_DATE':
            return Object.assign({}, state, {
                departureDate: action.payload,
            });
        case 'RETURN_DATE':
            return Object.assign({}, state, {
                returnDate: action.payload,
            });
        case 'DEPARTURE_AIRPORT':
            return Object.assign({}, state, {
                departureAirport: action.payload,
            });
        case 'ARRIVAL_AIRPORT':
            return Object.assign({}, state, {
                arrivalAirport: action.payload,
            });
        default:
            return state;
    }
};

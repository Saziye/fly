const initialState = {
    originAirport: {},
    destinationAirport: {},
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
        case 'ORIGIN_AIRPORT':
            return Object.assign({}, state, {
                originAirport: action.payload,
            });
        case 'DESTINATION_AIRPORT':
            return Object.assign({}, state, {
                destinationAirport: action.payload,
            });
        default:
            return state;
    }
};

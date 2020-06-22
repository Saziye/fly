
const initialAirport = {
    departureAirport: '' 
};


export default (state = initialAirport, action = {}) => {
    switch (action.type) {
      case 'DEPARTURE_AIRPORT':
        return Object.assign({}, state, {
            departureAirport: action.payload,
        });
      default:
        return state;
    }
  };
  
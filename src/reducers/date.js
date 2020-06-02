
const initialDate = {
    departureDate: '' ,
    returnDate: '' 
};


export default (state = initialDate, action = {}) => {
    switch (action.type) {
      case 'DEPARTURE_DATE':
        return Object.assign({}, state, {
            departureDate: action.payload,
        });
        case 'RETURN_DATE':
            return Object.assign({},state, {
                returnDate: action.payload,
            })
      default:
        return state;
    }
  };
  
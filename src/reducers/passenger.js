const initialState = {
  originAirport: {},
  destinationAirport: {},
  departureDate: "",
  returnDate: "",
  numberOfPassenger: 1,
  passengerType: "",
  flyType: "",
  selectedWay: 0,
  isOneWay: "",
  passengers: {
    adult: 1, //initil olarak 1 ver
    child: 0,
    infant: 0,
    senior: 0,
    student: 0,
  },
  cabinClass: "", //initial olarak all class ekle
  gidisSelected: false,
  donusSelected: false,
  sortValue: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "DEPARTURE_DATE":
      return Object.assign({}, state, {
        departureDate: action.payload,
      });
    case "RETURN_DATE":
      return Object.assign({}, state, {
        returnDate: action.payload,
      });
    case "ORIGIN_AIRPORT":
      return Object.assign({}, state, {
        originAirport: action.payload,
      });
    case "DESTINATION_AIRPORT":
      return Object.assign({}, state, {
        destinationAirport: action.payload,
      });
    case "CABIN_CLASS":
      return Object.assign({}, state, {
        cabinClass: action.payload,
      });
    case "PASSENGER":
      return Object.assign({}, state, {
        passengers: action.payload,
      });
    case "SELECTED_WAY":
      return Object.assign({}, state, {
        selectedWay: action.payload,
      });
    case "NUMBER_PASSENGER":
      return Object.assign({}, state, {
        numberOfPassenger: action.payload,
      });
    case "SORT_VALUE":
      return Object.assign({}, state, {
        sortValue: action.payload,
      });
    default:
      return state;
  }
};

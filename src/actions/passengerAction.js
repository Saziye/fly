function setDepartureDate(date) {
    return {
        type: 'DEPARTURE_DATE',
        payload: date
    };
}

function setReturnDate(date) {
    return {
        type: 'RETURN_DATE',
        payload: date
    };
}
function setOriginAirport(airportName) {
    return {
        type: 'ORIGIN_AIRPORT',
        payload: airportName
    };
}
function setDestinationAirport(airportName) {
    return {
        type: 'DESTINATION_AIRPORT',
        payload: airportName
    };
}

function setPassengers (passenger) {
    return {
        type: 'PASSENGER',
        payload: passenger
    }
}

function setCabinClass (cabinName) {
    return {
        type: 'CABIN_CLASS',
        payload: cabinName
    }
}
function setSelectedWay(index) {
    return {
        type: 'SELECTED_WAY',
        payload: index
    }
}
function setNumberofPassenger(count) {
    return {
        type: 'NUMBER_PASSENGER',
        payload: count
    }
}
function setSortValue(value) {
    return {
        type: 'SORT_VALUE',
        payload: value
    }
}
export {
    setDepartureDate,
    setReturnDate,
    setOriginAirport,
    setDestinationAirport,
    setCabinClass,
    setPassengers,
    setSelectedWay,
    setNumberofPassenger,
    setSortValue
}
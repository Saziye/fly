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
export {
    setDepartureDate,
    setReturnDate,
    setOriginAirport,
    setDestinationAirport
}
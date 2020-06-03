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
function setDepartureAirport(airportName) {
    return {
        type: 'DEPARTURE_AIRPORT',
        payload: airportName
    };
}
function setArrivalAirport(airportName) {
    return {
        type: 'ARRIVAL_AIRPORT',
        payload: airportName
    };
}
export {
    setDepartureDate,
    setReturnDate,
    setDepartureAirport,
    setArrivalAirport
}
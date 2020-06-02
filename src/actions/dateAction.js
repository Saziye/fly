function setDepartureDate(date) {
    return {
      type: 'DEPARTURE_DATE',
      payload: date
    };
  }
export {
    setDepartureDate 
}

function setReturnDate(date) {
    return {
      type: 'RETURN_DATE',
      payload: date
    };
  }
export {
    setReturnDate 
}
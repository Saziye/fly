import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://test.api.amadeus.com",
});

instance.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('token');
    const token = "1xm5RpmqjsaIAP5W5foa5DJTwhnY";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);


export function queryBuilder(
  originAirportCode,
  destinationAirportCode,
  departureDate,
  returnDate,
  adults,
  childen,
  infant,
  cabinClass
) {
  var baseUri = '/v2/shopping/flight-offers?';
  var param1 = 'originLocationCode=';
  var param2 = '&destinationLocationCode=';
  var param3 = '&departureDate=';
  var param4 = '&returnDate=';
  var param5 = '&adults=';
  var param6 = '&children=';
  var param7 = '&infants=';
  var param8 = '&travelClass=';
  var param9 = '&currencyCode=';
  var param10 = '&max=';
  var x = '';
  var y = '';
  x = 
    param1 + `${originAirportCode}`+ 
    param2 + `${destinationAirportCode}`+ 
    param3 + `${departureDate}` + 
    param5 + `${adults}` +
    param6 + `${childen}` +
    param7 + `${infant}`+
    param9 + 'TRY' +
    param10 + '3'
  if(returnDate != "") {
    x = x +  param4 + `${returnDate}`
  } 
  if(cabinClass != "") {
    x = x + param8 + `${cabinClass}` 
  }
  var res = baseUri.concat(x);
  return res;
}


export function getFlights(
  query
) {
  // Date Format be like 2020-09-01
  return instance({
    method: 'GET',
    url: `${query}`
  });
}

// export function getF() {
//   return instance.get(
//     '/v2/shopping/flight-offers', {
//       params: {
//         origin
//         originAirportCode: ,
//         destinationAirportCode: ,

//       }
//     }
//   );
// }



export default instance;

import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://test.api.amadeus.com",
});

instance.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('token');
    const token = "Bpl7BRsUM5RpLaDqCO5p4FPUrSQ5";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function getFlights(
  originAirportCode,
  destinationAirportCode,
  departureDate,
  returnDate
) {
  // Date Format be like 2020-09-01
  return instance
    .get(
      `/v2/shopping/flight-offers?originLocationCode=${originAirportCode}&destinationLocationCode=${destinationAirportCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=1`
    );
}

// const getFlights = async function (originAirportCode,
//   destinationAirportCode,
//   departureDate,
//   returnDate) {
//     return await instance.get(`/v2/shopping/flight-offers?originLocationCode=${originAirportCode}&destinationLocationCode=${destinationAirportCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=5`)
//     .then((response)=> {
//       response.json().data;
//     });
//   }


export default instance;
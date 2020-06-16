import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://test.api.amadeus.com",
});

instance.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('token');
    const token = "e4BnuGQOh16Eon2OT14ZcxGgJxjZ";
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
  return instance.get(
    `/v2/shopping/flight-offers?${'originLocationCode='+originAirportCode}&destinationLocationCode=${destinationAirportCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=2&max=20&currencyCode=TRY`
  );
}

export default instance;

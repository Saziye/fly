import axios from "axios";
import { AsyncStorage } from "react-native";

// async function makeRequest() {
//   const config = {
//       method: 'post',
//       url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
//       body: {
//         grant_type: 'client_credentials',
//         client_id: 'WwXb8wNG32GhzGdYAnbuQlcqAGLdqPjG',
//         client_secret: 'V0GOCMDQani9V5GJ'
//       }
//   }

//   let res = await axios(config)
//   return res.data;
// }

const instance = axios.create({
  baseURL: "https://test.api.amadeus.com",
});

// const getAccessToken = async () => {
//   const params = new URLSearchParams();
//   params.append("grant_type", "client_credentials");
//   params.append("client_id", "WwXb8wNG32GhzGdYAnbuQlcqAGLdqPjG");
//   params.append("client_secret", "V0GOCMDQani9V5GJ");

//   axios
//     .post("https://test.api.amadeus.com/v1/security/oauth2/token", {
//       params,
//     })
//     .then(function (response) {
//       console.log("servis içinde ===================");
//       const a = response.access_token;
//       console.log(a);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// const getAccessToken2 = async () => {
//   return await axios.post(
//     'https://test.api.amadeus.com/v1/security/oauth2/token',
//     {
//       grant_type: 'client_credentials',
//       client_id: 'WwXb8wNG32GhzGdYAnbuQlcqAGLdqPjG',
//       client_secret: 'V0GOCMDQani9V5GJ',
//     }
//   );
// };

export async function getAccessToken2() {
  var now = new Date();

  if(await AsyncStorage.getItem('lasttime') == undefined || AsyncStorage.getItem('lasttime')<now ){
  console.log("GİRDİ");
    
  var axios = require("axios");
  var qs = require("qs");
  var data = qs.stringify({
    grant_type: "client_credentials",
    client_id: "WwXb8wNG32GhzGdYAnbuQlcqAGLdqPjG",
    client_secret: "V0GOCMDQani9V5GJ",
  });
  var config = {
    method: "post",
    url: "https://test.api.amadeus.com/v1/security/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
       AsyncStorage.setItem("accessToken", response.data.access_token);
       AsyncStorage.setItem("expiresIn", response.data.expires_in);
       var a =new Date();
       a.setSeconds(a.getSeconds()+response.data.expires_in);
       AsyncStorage.setItem("lasttime",a);
      //console.log(JSON.stringify(response.data.expires_in));
      console.log("TOKEN");
      
      console.log(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

instance.interceptors.request.use(
  async (config) => {
    // const token = "1iJCiihi5UmiqIGPx6vs2W8GVp6D";
    // getAccessToken2().then( (response) => {
    //   console.log(response.data);
    //   const a = response.data.access_token;
    // }).catch((error)=> {
    //   console.log(error);
    // });
    if (await AsyncStorage.getItem('accessToken')) {
      config.headers.Authorization = `Bearer ${ await AsyncStorage.getItem('accessToken')}`;
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
  var baseUri = "/v2/shopping/flight-offers?";
  var param1 = "originLocationCode=";
  var param2 = "&destinationLocationCode=";
  var param3 = "&departureDate=";
  var param4 = "&returnDate=";
  var param5 = "&adults=";
  var param6 = "&children=";
  var param7 = "&infants=";
  var param8 = "&travelClass=";
  var param9 = "&currencyCode=";
  var param10 = "&max=";
  var x = "";
  var y = "";
  x =
    param1 +
    `${originAirportCode}` +
    param2 +
    `${destinationAirportCode}` +
    param3 +
    `${departureDate}` +
    param5 +
    `${adults}` +
    param6 +
    `${childen}` +
    param7 +
    `${infant}` +
    param9 +
    "TRY" +
    param10 +
    "50";
  if (returnDate != "") {
    x = x + param4 + `${returnDate}`;
  }
  if (cabinClass != "") {
    x = x + param8 + `${cabinClass}`;
  }
  var res = baseUri.concat(x);
  return res;
}

export function getFlights(query) {
  // Date Format be like 2020-09-01
  getAccessToken2();
  return instance({
    method: "GET",
    url: `${query}`,
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

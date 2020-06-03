import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";
import { SafeAreaView } from "react-navigation";
import { getAirports } from "../../services/airportService";

const KEYS_TO_FILTERS = [
  "AirportCode",
  "AirportName",
  "CityName",
  "CountryName",
];

class AirportsListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      type: "",
      airports: [],
      popularair: [
        {
          AirportCode: "IST",
          AirportName: "İstanbul Havalimanı",
          CityName: "Istanbul",
          CountryName: "Türkiye",
          IsCity: false,
        },
        {
          AirportCode: "ESB",
          AirportName: "Esenboga",
          CityName: "Ankara",
          CountryName: "Türkiye",
          IsCity: false,
        },
        {
          AirportCode: "ADB",
          AirportName: "Adnan Menderes",
          CityName: "Izmir",
          CountryName: "Türkiye",
          IsCity: false,
        },
        {
          AirportCode: "AYT",
          AirportName: "Antalya",
          CityName: "Antalya",
          CountryName: "Türkiye",
          IsCity: false,
        },
      ],
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    console.log("NAVIGATION");
    console.log(navigation);

    this.setState({ type: navigation.state.params.type });
    getAirports().then((airportRes) => {
      this.setState({ airports: airportRes.data });
    });
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.type}` == 1 ? "NEREDEN" : "NEREYE",
    headerTitleStyle: { textAlign: "center", alignSelf: "center" },
    headerStyle: {
      backgroundColor: "white",
    },
  });

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  keyExtractor = (item, index) => index.toString();

  airportItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <View style={styles.airportCode}>
          <Text style={styles.textAirportCode}>{item.AirportCode}</Text>
        </View>
        <View style={styles.containerText}>
          <View style={styles.cityName}>
            <Text style={styles.textCityName}>{item.CityName}</Text>
          </View>
          <View
            style={{
              width: "3%",
              borderBottomColor: "black",
              borderBottomWidth: 2,
              alignSelf: "center",
              marginHorizontal: "2%",
            }}
          ></View>
          <View style={styles.airportName}>
            <Text style={styles.textAirportName}>{item.AirportName}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { type, airports, searchTerm, popularair } = this.state;

    const filteredAirports = airports.filter(
      createFilter(searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <View style={styles.container}>
        <SearchInput
          onChangeText={(term) => {
            this.searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="Şehir, havalimanı adı veya kodu"
          clearIcon
        />
        <ScrollView>
          <FlatList
            // showsHorizontalScrollIndicator={false}

            data={searchTerm === "" ? popularair : filteredAirports}
            keyExtractor={this.keyExtractor}
            renderItem={this.airportItem}
          />
        </ScrollView>
      </View>
    );
  }
}

// AirportsListScreen.navigationOptions = () => {
//   return {
//     // headerShown: false
//     // title: "Havalimanı",
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderColor: "red",
    borderWidth: 1,
  },
  searchInput: {
    padding: 10,
    borderColor: "blue",
    borderWidth: 1,
    margin: 10,
  },
  listItem: {
    // color: 'black',
    flexDirection: "row",
    borderColor: "pink",
    borderWidth: 1,
  },
  airportCode: {
    borderColor: "red",
    borderWidth: 2,
    width: 50,
    height: 50,
    //width: '50%',
    alignSelf: "center",
    justifyContent: "center",
  },
  containerText: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: 'center',
    alignSelf: "center",
    //marginLeft: '10%',
    paddingLeft: "8%",
    borderColor: "yellow",
    borderWidth: 2,
  },
  textAirportCode: {
    fontSize: 20,
    textAlign: "center",
    color: "#ee7621",
    fontWeight: "bold",
  },
  cityName: {
    //margin: 3,
    borderColor: "green",
    borderWidth: 2,
  },
  textCityName: {
    justifyContent: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  airportName: {
    borderColor: "red",
    borderWidth: 1,
  },
  textAirportName: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});

export default AirportsListScreen;

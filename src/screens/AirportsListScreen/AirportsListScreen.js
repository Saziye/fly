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
import { getAirports } from "../../services/airportService";
import { connect } from "react-redux";
import {
  setOriginAirport,
  setDestinationAirport,
} from "../../actions/passengerAction";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
    console.log("ÇAlıştın mı")
    getAirports().then((airportRes) => {
      this.setState({ airports: airportRes.data });
    });
  }

  static navigationOptions = ({ navigation }) => ({
    title:
      `${navigation.state.params.type}` == 1
        ? "Varış Havalimanı Seçiniz"
        : "Kalkış Havalimanı Seçiniz",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
      alignSelf: "center",
      textAlign: "center",
    },
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16416c",
    },
    headerRight: (
      <View style={{ marginRight: 15 }}>
        <AntDesign
          name="close"
          size={32}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
    ),
    headerLeft: null,
  });

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  keyExtractor = (item, index) => index.toString();

  airportItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (this.state.type === 0) {
          // this.props.setOriginAirport(item.AirportName);
          this.props.setOriginAirport(item);
          this.props.navigation.navigate("SearchFly");
        } else {
          // this.props.setDestinationAirport(item.AirportName);
          this.props.setDestinationAirport(item);
          this.props.navigation.navigate("SearchFly");
        }
      }}
    >
      <View style={styles.listItem}>
        <View style={styles.airportCode}>
          <Text style={styles.textAirportCode}>{item.AirportCode}</Text>
        </View>
        <View style={styles.containerText}>
          <View style={styles.airportName}>
            <Text style={styles.textCityName}>{item.AirportName}, </Text>
          </View>
          <View style={styles.cityName}>
            <Text style={styles.textCityName}>{item.CityName}, </Text>
          </View>
          <View style={styles.cityName}>
            <Text style={styles.textCityName}>{item.CountryName}</Text>
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
        <View style={styles.searchContainer}>
          <Fontisto
            name="search"
            size={22}
            color="#373737"
            style={styles.buttonIcon}
          />
          <SearchInput
            onChangeText={(term) => {
              this.searchUpdated(term);
            }}
            style={styles.searchInput}
            placeholder="Şehir, havalimanı adı veya kodu giriniz"
          />
        </View>
        {searchTerm === "" ? (
          <View style={{ backgroundColor: '#f9c40c', height: 30, flexDirection:'row'}}>
            <Text style={{alignSelf: 'center', marginLeft: 20, fontSize: 16}}> Popüler Aramalar</Text>
          </View>
        ) : null}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  searchContainer: {
    flexDirection: "row",
    margin: 10,
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonIcon: {
    marginLeft: 5,
    alignSelf: "center",
  },
  searchInput: {
    padding: 5,
    margin: 5,
    width: "155%",
  },
  listItem: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    // backgroundColor:'rgba(202, 206, 202, 0.59)',
  },
  airportCode: {
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  containerText: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    paddingLeft: "2%",
    paddingVertical: "4%",
  },
  textAirportCode: {
    fontSize: 20,
    textAlign: "center",
    color: "#323232",
    fontWeight: "bold",
  },
  textCityName: {
    justifyContent: "center",
    fontWeight: "normal",
    fontSize: 16,
  },
  textAirportName: {
    fontSize: 16,
    justifyContent: "center",
    fontWeight: "normal",
  },
});

const mapStateToProps = (state) => {
  return {
    origin: state.passenger.originAirport,
    destination: state.passenger.destinationAirport,
  };
};

const mapDispatchToProps = () => {
  return {
    setOriginAirport,
    setDestinationAirport,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(AirportsListScreen);

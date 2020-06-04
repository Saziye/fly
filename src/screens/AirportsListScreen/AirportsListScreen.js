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
import { setOriginAirport, setDestinationAirport } from "../../actions/passengerAction";
import { Fontisto } from "@expo/vector-icons";

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
    title: `${navigation.state.params.type}` == 1 ? "Varış Havalimanı" : "Kalkış Havalimanı",
    headerTitleStyle: { 
      fontWeight: 'bold',
      fontSize: 16, 
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: "#3ca0cd",
    },
  });

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  keyExtractor = (item, index) => index.toString();

  airportItem = ({ item }) => (
    <TouchableOpacity onPress={()=> {
      if(this.state.type === 0) {
        // this.props.setOriginAirport(item.AirportName);
        this.props.setOriginAirport(item);
        this.props.navigation.navigate('Search2')
      } else {
        // this.props.setDestinationAirport(item.AirportName);
        this.props.setDestinationAirport(item);
        this.props.navigation.navigate('Search2');
      }
      
      //console.log(this.props.origin);
    }}>
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
        <View style={styles.searchContainer}>
          <Fontisto
            name="search"
            size={22}
            color="#3ca0cd"
            style={styles.buttonIcon}
          />
          <SearchInput
          onChangeText={(term) => {
            this.searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="Şehir, havalimanı adı veya kodu"
          // clearIcon
          // sortResults= {true}
          />
        </View>
        
        
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
    // borderColor: "red",
    // borderWidth: 1,
    // marginHorizontal:8
  },
  searchContainer: {
    flexDirection: 'row',
    //alignSelf:'stretch',
    // borderColor: "red",
    // borderWidth: 1,
  },
  buttonIcon: {
    margin: 8,
    alignSelf: "center",
  },
  searchInput: {
    padding: 10,
    borderColor: "rgba(114, 122, 113, 0.99)",
    borderWidth: 1,
    margin: 10,
    width: '150%'
    // alignSelf: 'stretch',

  },
  listItem: {
    // color: 'black',
    flexDirection: "row",
    // borderColor: "pink",
    // borderWidth: 1,
    backgroundColor:'rgba(202, 206, 202, 0.59)',
  },
  airportCode: {
    // borderColor: "red",
    // borderWidth: 2,
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
    marginLeft: '8%',
    paddingLeft: "8%",
    paddingVertical: "4%",
    borderColor: "rgba(114, 122, 113, 0.99)",
    //borderWidth: 2,
    borderTopWidth: 1,
    //borderBottomWidth: 2
  },
  textAirportCode: {
    fontSize: 20,
    textAlign: "center",
    color: "#ee7621",
    fontWeight: "bold",
  },
  cityName: {
    //margin: 3,
    // borderColor: "green",
    // borderWidth: 2,
  },
  textCityName: {
    justifyContent: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 16,
  },
  airportName: {
    // borderColor: "red",
    // borderWidth: 1,
  },
  textAirportName: {
    fontSize: 14,
    textAlign: "center",
    //color: "#3ca0cd",
    color: "black",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => {
  return {
      origin: state.passenger.originAirport,
      destination: state.passenger.destinationAirport
  };
};

const mapDispatchToProps = () => {
  return {
    setOriginAirport,
    setDestinationAirport
  };
};

export default connect(mapStateToProps,mapDispatchToProps())(AirportsListScreen);

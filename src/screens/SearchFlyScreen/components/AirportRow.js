import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import AirportItem from "./AirportItem";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";

class AirportRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOrigin: {
        AirportCode: "IST",
        AirportName: "İstanbul Havalimanı",
        CityName: "Istanbul",
        CountryName: "Türkiye",
        IsCity: false,
      },
      defaultDestination: {
        AirportCode: "ESB",
        AirportName: "Esenboga",
        CityName: "Ankara",
        CountryName: "Türkiye",
        IsCity: false,
      },
    };
  }

  navigateFunction = (screen, type) => {
    const { navigation } = this.props;
    navigation.navigate(screen, { type: type });
    console.log("navigate");
  };

  render() {
    const { defaultOrigin, defaultDestination } = this.state;
    return (
      <View style={styles.container}>
        <AirportItem
          way={"Nereden"}
          code={
            this.props.origin.AirportCode == null
              ? defaultOrigin.AirportCode
              : this.props.origin.AirportCode
          }
          airport={
            this.props.origin.AirportName == null
              ? defaultOrigin.AirportName
              : this.props.origin.AirportName
          }
          city={
            (this.props.origin.CityName == null
              ? defaultOrigin.CityName
              : this.props.origin.CityName) +
            "," +
            (this.props.origin.CountryName == null
              ? defaultOrigin.CountryName
              : this.props.origin.CountryName)
          }
          // click={() => this.navigateFunction("AirportsList", 0)}
        />
        <TouchableOpacity style={styles.iconContainer}>
          {/* <Image source={require('../../../../assets/images/change1.png')} style= {styles.imageStyle} /> */}
          <FontAwesome5 name="exchange-alt" size={24} color="#fff" />
        </TouchableOpacity>
        <AirportItem
          way={"Nereye"}
          code={
            this.props.destination.AirportCode == null
              ? defaultDestination.AirportCode
              : this.props.destination.AirportCode
          }
          airport={
            this.props.destination.AirportName == null
              ? defaultDestination.AirportName
              : this.props.destination.AirportName
          }
          city={
            (this.props.destination.CityName == null
              ? defaultDestination.CityName
              : this.props.destination.CityName) +
            "," +
            (this.props.destination.CountryName == null
              ? defaultDestination.CountryName
              : this.props.destination.CountryName)
          }
          //click={() => this.navigateFunction("AirportsList", 1)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
    // borderColor: 'red',
    // borderWidth: 2
  },
  iconContainer: {
    alignSelf: "center",
    padding: "5%",
    // borderColor: 'yellow',
    // borderWidth: 2
  },
  //   imageStyle: {
  //     //   width:undefined,
  //     //   height: undefined,
  //   }
});

const mapStateToProps = (state) => {
  return {
    origin: state.passenger.originAirport,
    destination: state.passenger.destinationAirport,
  };
};

export default connect(mapStateToProps)(AirportRow);

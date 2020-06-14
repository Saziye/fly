import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import FlyGroupList from "./components/FlyGroupList";
import { connect } from "react-redux";
import moment from 'moment';
import 'moment/locale/tr'

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => ({
    title: "dene",
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
    headerRight: null,
    headerLeft: (
      <View style={{ marginLeft: 15 }}>
        <AntDesign
          name="left"
          size={32}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    ),
  });

  render() {
    const {} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container_one}>
          <Text style={styles.textStyle}> {moment(this.props.departureDate).format("DD MMMM YYYY dddd")} </Text>
          <FontAwesome5
            name="exchange-alt"
            size={17}
            color="#453914"
            style={styles.iconStyle}
          />
          <Text style={styles.text2Style}> {moment(this.props.returnDate).format("DD MMMM YYYY dddd")} </Text>
        </View>
        <FlyGroupList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16416c",
    flex: 1,
  },
  container_one: {
    backgroundColor: "#ffc501",
    height: 35,
    flexDirection: "column",
    justifyContent: 'center',
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    alignSelf: 'flex-start',
    padding:5,
  },
  text2Style: {
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    position: 'absolute',
    alignSelf: "flex-end",
    textAlign: 'center',
    padding: 5,
  },
  iconStyle: {
    alignSelf: 'center',
    position: 'absolute',
  }, 
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    originAirport: state.passenger.originAirport,
    destinationAirport: state.passenger.destinationAirport,
  };
};


export default connect(mapStateToProps)(SearchResultsScreen);
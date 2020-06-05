import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-navigation";
import AirportRow from "./components/AirportRow";
import DateRow from "./components/DateRow";
import CabinRow from "./components/CabinRow";
import SegmentedControlTab from "react-native-segmented-control-tab";
//for redux
import { connect } from "react-redux";
import {
  setDepartureDate,
  setReturnDate,
  setSelectedWay,
} from "../../actions/passengerAction";
const BLUE = "#104e8b";

class SearchFlyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
    this.props.setSelectedWay(index);
  };

  render() {
    const { selectedIndex } = this.state;

    return (
      <SafeAreaView
        forceInset={{ top: "always" }}
        style={{ flex: 1, backgroundColor: "#104e8b" }}
      >
        {/* <ImageBackground
                    style={styles.image}
                    source={require("../../../assets/images/k.jpg")}
                > */}
        <View>
          <View style={styles.container_one}>
            <SegmentedControlTab
              tabsContainerStyle={styles.segment}
              values={["Tek Yön", "Gidiş Dönüş"]}
              selectedIndex={this.state.selectedIndex}
              onTabPress={this.handleIndexChange}
              borderRadius={5}
              activeTabStyle={styles.activeTabStyle}
              activeTabTextStyle={styles.activeTabTextStyle}
              tabTextStyle={styles.tabTextStyle}
              tabStyle={styles.tabStyle}
            />
          </View>
          <View>
            <AirportRow />
            <DateRow />
            <CabinRow/>
          </View>
        </View>
        {/* </ImageBackground> */}
      </SafeAreaView>
    );
  }
}

SearchFlyScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  segment: {
    width: "70%",
    alignSelf: "center",
    height: 23,
    marginTop: 30,
    marginBottom: 10,
  },
  tabStyle: {
    borderWidth: 1,
    borderColor: "transparent",
    width: 50,
    borderRadius: 5,
    backgroundColor: "rgba(52, 98, 168, 0.36)",
  },
  activeTabStyle: {
    backgroundColor: "#fff",
  },
  activeTabTextStyle: {
    fontSize: 13,
    color: BLUE,
    fontWeight: "bold",
  },
  tabTextStyle: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    origin: state.passenger.originAirport,
    destination: state.passenger.destinationAirport,
    selectedWay: state.passenger.selectedWay,
  };
};

const mapDispatchToProps = () => {
  return {
    setDepartureDate,
    setReturnDate,
    setSelectedWay,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SearchFlyScreen);

import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-navigation";
import AirportRow from "./components/AirportRow";
import DateRow from "./components/DateRow";
import CabinRow from "./components/CabinRow";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Button } from "react-native-elements";
import { Fontisto } from "@expo/vector-icons";

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
    if (index == 0) this.props.setReturnDate("");
    if (index == 1) {
      const date = new Date();
      const today =
        date.getFullYear() +
        "-" +
        (date.getMonth() > 8
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1)) +
        "-" +
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate());
      this.props.setReturnDate(today);
    }
  };
  navigateFunction = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen);
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
              selectedIndex={this.props.selectedWay}
              onTabPress={this.handleIndexChange}
              borderRadius={5}
              activeTabStyle={styles.activeTabStyle}
              activeTabTextStyle={styles.activeTabTextStyle}
              tabTextStyle={styles.tabTextStyle}
              tabStyle={styles.tabStyle}
            />
          </View>
          <View>
            <AirportRow navigation={this.props.navigation} />
            <DateRow />
            <CabinRow navigation={this.props.navigation} />
            <View style={styles.container_four}>
              <Button
                buttonStyle={styles.buttonSearch}
                title="UÇUŞ ARA"
                titleStyle={styles.btnTitleStyle}
                onPress={() => {
                  this.navigateFunction("SearchResults");
          
                }}
              />
            </View>
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
  container_four: {
    width: "60%",
    alignSelf: "center",
    marginTop: 30,
  },
  buttonSearch: {
    backgroundColor: "#f6c10b",
    height: 40,
  },
  btnTitleStyle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3f391a",
  },
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    origin: state.passenger.originAirport,
    destination: state.passenger.destinationAirport,
    selectedWay: state.passenger.selectedWay,
    passenger: state.passenger,
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

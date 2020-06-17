import React, { Component } from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import FlyGroupList from "./components/FlyGroupList";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/tr";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ModalItem from "./components/ModalItem";

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: (
      <>
        <Text style={styles.headerTitle}>{navigation.getParam("Origin")}</Text>
        <FontAwesome5
          name="exchange-alt"
          size={17}
          color="#ffc501"
          //style={{}}
        />
        <Text style={styles.headerTitle}>
          {navigation.getParam("Destination")}
        </Text>
      </>
    ),
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

  componentDidMount() {
    const origin = String(this.props.originAirport.CityName);
    const destination = String(this.props.destinationAirport.CityName);
    this.props.navigation.setParams({ Origin: origin });
    this.props.navigation.setParams({ Destination: destination });
  }

  navigateFunction = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.container}>
        {this.props.selectedWay == 1 ? (
          <View style={styles.container_one}>
            <Text style={styles.textStyle}>
              {" "}
              {moment(this.props.departureDate).format(
                "DD MMMM YYYY dddd"
              )}{" "}
            </Text>
            <FontAwesome5
              name="exchange-alt"
              size={17}
              color="#453914"
              style={styles.iconStyle}
            />
            <Text style={styles.text2Style}>
              {" "}
              {moment(this.props.returnDate).format("DD MMMM YYYY dddd")}{" "}
            </Text>
          </View>
        ) : (
          <View style={styles.container_one}>
            <Text style={styles.text3Style}>
              {moment(this.props.departureDate).format("DD MMMM YYYY dddd")}
            </Text>
          </View>
        )}

        <View style={styles.container_two}>
          <Button
            title="Önceki Gün"
            buttonStyle={styles.btnStyle1}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Sonraki Gün"
            buttonStyle={styles.btnStyle2}
            titleStyle={styles.buttonText}
          />
        </View>
        <FlyGroupList />
        {/* <FlyItemList/> */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.sortStyle}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <MaterialIcons name="sort" size={30} color="white" />
            <Text style={styles.sortText}>Sırala</Text>
            <ModalItem
              modalVisible={modalVisible}
              onPress={(i) => {
                this.setModalVisible(i);
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortStyle}
            onPress={() => this.navigateFunction("FilterScreen")}
          >
            <Feather name="filter" size={30} color="white" />
            <Text style={styles.sortText}>Filtrele</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortStyle}>
            <Feather name="bell" size={30} color="white" />
            <Text style={styles.sortText}>Fiyat Alarmı</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastStyle}>
            <Feather name="share" size={30} color="white" />
            <Text style={styles.sortText}>Paylaş</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    alignSelf: "flex-start",
    padding: 5,
  },
  text3Style: {
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    alignSelf: "center",
    padding: 5,
  },
  text2Style: {
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "flex-end",
    textAlign: "center",
    padding: 5,
  },
  iconStyle: {
    alignSelf: "center",
    position: "absolute",
  },
  filterContainer: {
    //justifyContent: 'flex-end',
    backgroundColor: "#474745",
    flexDirection: "row",
    // width:100,
    // height:50
  },
  sortStyle: {
    // borderColor: "blue",
    // borderWidth: 1,
    width: "25%",
    alignItems: "center",
    marginVertical: 10,
    borderRightColor: "#6e6e6c",
    borderRightWidth: 3,
  },
  lastStyle: {
    // borderColor: "blue",
    // borderWidth: 1,
    width: "25%",
    alignItems: "center",
    marginVertical: 10,
  },
  sortText: {
    color: "white",
    fontSize: 14,
    paddingTop: 3,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
    marginRight: 10,
    marginLeft: 10,
  },
  container_two: {
    flexDirection: "row",
    //backgroundColor: "rgba(52, 98, 168, 0.36)",
    //justifyContent: "space-between",
    marginTop: 10,
  },
  btnStyle2: {
    backgroundColor: "#474745",
    height: 35,
    width: "80%",
    // position: 'absolute',
    alignSelf: "flex-end",
    borderRadius: 0,
    borderColor: "#6e6e6c",
  },
  btnStyle1: {
    backgroundColor: "#474745",
    height: 35,
    width: "80%",
    //position:'absolute',
    alignSelf: "flex-start",
    borderRadius: 0,
    borderColor: "#6e6e6c",
  },
  buttonText: {
    textAlign: "center",
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    originAirport: state.passenger.originAirport,
    destinationAirport: state.passenger.destinationAirport,
    selectedWay: state.passenger.selectedWay,
  };
};

export default connect(mapStateToProps)(SearchResultsScreen);

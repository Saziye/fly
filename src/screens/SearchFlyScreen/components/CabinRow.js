import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
  AndroidToast,
  TouchableHighlightBase,
} from "react-native";
import CabinItem from "./CabinItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//import for redux
import { connect } from "react-redux";
import { setPassengers } from "../../../actions/passengerAction";
import ModalItem from "./ModalItem";

class CabinRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengerArrayLabels: ["Yetişkin", "Çocuk", "Bebek", "Yaşlı", "Öğrenci"],
      rowLabel: "",
      modalVisible: false,
    };
  }
  navigateFunction = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  labelPassenger(a) {
    let myKeys = Object.keys(a);
    let myValues = Object.values(a);
    let rowLabel = "";
    myKeys.forEach((element, index) => {
      if (parseInt(myValues[index]) != 0) {
        if (parseInt(index) != 4)
          rowLabel =
            rowLabel +
            myValues[index] +
            "-" +
            this.state.passengerArrayLabels[index] +
            " ";
        else
          rowLabel =
            rowLabel +
            myValues[index] +
            " " +
            this.state.passengerArrayLabels[index];
      }
    });
    this.setState({ rowLabel });
  }

  componentWillReceiveProps(nextProps) {
    this.labelPassenger(nextProps.passengers.passengers);
  }

  componentDidMount() {
    this.labelPassenger(this.props.passengers.passengers);
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <CabinItem
          icon={<MaterialIcons name="person" size={30} color="white" />}
          title={this.state.rowLabel}
          click={() => this.navigateFunction("Passenger")}
        />
        <CabinItem
          icon={
            <MaterialCommunityIcons name="car-seat" size={30} color="white" />
          }
          title={
            this.props.cabinClass === "ECONOMY"
              ? "Ekonomi"
              : this.props.cabinClass === "BUSINESS"
              ? "Bussiness"
              : "Tüm Sınıflar"
          }
          click={() => {
            this.setModalVisible(true);
          }}
        />
         <ModalItem
          modalVisible={modalVisible}
          onPress={(i) => {
            this.setModalVisible(i);
          }}
        />
        
        {/* {modalVisible === true && <ModalItem
          modalVisible={modalVisible}
          onPress={(i) => {
            console.log("DENEME");
            console.log(i);
            this.setModalVisible(i);
          }}
        />} */}
        
        <CabinItem
          icon={
            <MaterialCommunityIcons
              name="airplane-takeoff"
              size={30}
              color="white"
            />
          }
          title={"Direkt Uçuşlar"}
          // click={}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 8,
    width: "100%",
    paddingHorizontal: 25,
    // borderColor: 'yellow',
    // borderWidth: 2
  },
});

const mapStateToProps = (state) => {
  return {
    passengers: state.passenger,
    cabinClass: state.passenger.cabinClass,
  };
};

export default connect(mapStateToProps)(CabinRow);

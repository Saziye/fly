import React, { Component } from "react";
import { View, StyleSheet, Text, Alert, ToastAndroid } from "react-native";
import { Button } from "react-native-elements";
import { PassengerRow } from "./components/PassengerRow";
import { AntDesign } from "@expo/vector-icons";
//import for redux
import { connect } from "react-redux";
import {
  setPassengers,
  setNumberofPassenger,
} from "../../actions/passengerAction";
import passenger from "../../reducers/passenger";

const passengerMap = [
  { type: "adult", label: "Yetişkin", sub: "(12 yaş ve üzeri)" },
  { type: "child", label: "Çocuk", sub: "(2 ve 12 yaş arası)" },
  { type: "infant", label: "Bebek", sub: "(0 ve 2 yaş arası)" },
  // { type: "senior", label: "Yaşlı", sub: "(65 yaş üstü)" },
  // { type: "student", label: "Öğrenci", sub: "(12 ve 24 yaş arası)" },
];

class PassengerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countPassenger: this.props.numberOfPassenger,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Yolcu Seçiniz",
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
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    ),
    headerLeft: null,
  });

  //////////////////
  onDecrement(type) {
    let passengers = this.props.passengers;
    let count = passengers[type] - 1;
    if (type == "adult" && passengers["adult"]-1 == 0) {
      Alert.alert("Bilgilendirme", "Çocuklar tek başına seyahat edemez.", [
        { text: "Tamam", onPress: () => null },
      ]);
      passengers["child"] = passengers["adult"] - 1;
    }
    if (type == "adult" && passengers["adult"] - 1 < passengers["infant"]) {
      Alert.alert(
        "Bilgilendirme",
        "Bebek sayısı yetişkin sayısından fazla olamaz.",
        [{ text: "Tamam", onPress: () => null }]
      );
      passengers["infant"] = passengers["adult"] - 1;
    }
    if (count < 0) {
      Alert.alert("Bilgilendirme", "Yolcu sayısı daha az olamaz", [
        { text: "Tamam", onPress: () => null },
      ]);
    } else {
      passengers[type] = count;
      var t= passengers["adult"] +passengers["child"]+passengers["infant"];
      this.setState({ countPassenger: t });
    }
    console.log("Bebek sayısı:", this.props.passengers["infant"]);
    console.log("Yetişkin sayısı:", this.props.passengers["adult"]);
  }
  onIncrement(type) {
    let passengers = this.props.passengers;
    let count = passengers[type] + 1;
    if (type == "child" && this.props.passengers["adult"] == 0) {
      Alert.alert("Bilgilendirme", "Çocuklar tek başına seyahat edemez.", [
        { text: "Tamam", onPress: () => null },
      ]);
      passengers["child"] = passengers["adult"];
      console.log(passengers["child"]);
      console.log(passengers["adult"]);
    }
    else if (
      type == "infant" &&
      this.props.passengers["infant"] + 1 > this.props.passengers["adult"]
    ) {
      Alert.alert(
        "Bilgilendirme",
        "Bebek sayısı yetişkin sayısından fazla olamaz.",
        [{ text: "Tamam", onPress: () => null }]
      );
      passengers["infant"] = passengers["adult"];
    } else {
      passengers[type] = count;
      var t= passengers["adult"] +passengers["child"]+passengers["infant"];
      this.setState({ countPassenger: t });
    }

    console.log("Bebek sayısı:", this.props.passengers["infant"]);
    console.log("Yetişkin sayısı:", this.props.passengers["adult"]);
    // this.onPassenger(passengers);
  }

  onPassenger(passengers) {
    this.props.setPassengers(passengers);
  }

  /////////////////////
  render() {
    const { countPassenger } = this.state;

    return (
      <View>
        <View style={styles.containerPassenger}>
          {passengerMap.map((passenger, index) => (
            <PassengerRow
              key={index}
              onDecrement={(type) => this.onDecrement(type)}
              onIncrement={(type) => this.onIncrement(type)}
              type={passenger.type}
              label={passenger.label}
              sub={passenger.sub}
              count={this.props.passengers[passenger.type]}
            />
          ))}
        </View>
        <View style={styles.btnContainer}>
          <Button
            buttonStyle={styles.buttonSearch}
            title="TAMAM"
            titleStyle={styles.btnTitleStyle}
            onPress={() => {
              if (countPassenger > 0) {
                this.onPassenger(this.props.passengers);
                this.props.setNumberofPassenger(countPassenger);
                setTimeout(() => {
                  console.log("Number of pass::", this.props.numberOfPassenger);
                });
                console.log(this.props.passengers);
                this.props.navigation.goBack();
              } else {
                Alert.alert("Bilgilendirme", "Lütfen en az bir yolcu seçiniz", [
                  { text: "Tamam", onPress: () => null },
                ]);
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonSearch: {
    backgroundColor: "white",
    height: 40,
    width: "60%",
    borderColor: "#393939",
    borderWidth: 2,
    alignSelf: "center",
  },
  btnTitleStyle: {
    fontSize: 17,
    fontWeight: "normal",
    color: "#393939",
    textAlign: "center",
  },
  btnContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    marginTop: "20%",
  },
});

const mapStateToProps = (state) => {
  return {
    passengers: state.passenger.passengers,
    numberOfPassenger: state.passenger.numberOfPassenger,
  };
};

const mapDispatchToProps = () => {
  return {
    setPassengers,
    setNumberofPassenger,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PassengerScreen);

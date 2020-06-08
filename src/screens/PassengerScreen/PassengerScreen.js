import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { PassengerRow } from "./components/PassengerRow";
import { AntDesign } from "@expo/vector-icons";

const passengerMap = [
  { type: "adult", label: "Yetişkin", sub: "(24 yaş üstü)" },
  { type: "child", label: "Çocuk", sub: "(2 ve 11 yaş arası)" },
  { type: "infant", label: "Bebek", sub: "(0 ve 2 yaş arası)" },
  { type: "senior", label: "Yaşlı", sub: "(65 yaş üstü)" },
  { type: "student", label: "Öğrenci", sub: "(12 ve 24 yaş arası)" },
];

class PassengerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          onPress={() => navigation.goBack()}
        />
      </View>
    ),
    headerLeft: null,
  });
  //////////////////
  onDecrement(type) {
    let passengers = this.props.passengers;
    let count = passengers[type] - 1;
    passengers[type] = count;
    this.onPassenger(passengers);
    this.setState({ countPassenger: this.state.countPassenger - 1 });
  }

  onIncrement(type) {
    let passengers = this.props.passengers;
    let count = passengers[type] + 1;
    passengers[type] = count;
    this.onPassenger(passengers);
    this.setState({ countPassenger: this.state.countPassenger + 1 });
  }

  onPassenger(passengers) {
    if (this.state.countPassenger > 0) {
      this.props.setPassengers(passengers);
    } else {
      // Alert.alert("E az 1 yolcu seçmelisiniz");
    }
  }
  /////////////////////
  render() {
    const {} = this.state;

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
              count={"1"}
            />
          ))}
        </View>
        <View style={styles.btnContainer}>
          <Button
            buttonStyle={styles.buttonSearch}
            title="TAMAM"
            titleStyle={styles.btnTitleStyle}
            // onPress={() => {
            //   console.log("========>");
            //   console.log(this.props.departureDate);
            //   console.log(this.props.returnDate);
            // }}
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
    marginTop: '20%'
  },
});

export default PassengerScreen;

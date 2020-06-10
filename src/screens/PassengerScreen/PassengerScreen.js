import React, { Component } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { Button } from "react-native-elements";
import { PassengerRow } from "./components/PassengerRow";
import { AntDesign } from "@expo/vector-icons";
//import for redux
import { connect } from "react-redux";
import { setPassengers } from "../../actions/passengerAction";
import passenger from "../../reducers/passenger";

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
    this.state = {
      countPassenger: this.props.passengers["adult"],
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Yolcu Seçiniz",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
      position: "absolute",
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
    if (
      (type == "adult" || type == "senior" || type == "student") &&
      count === 0 &&
      (this.props.passengers["child"] > this.props.passengers["adult"] ||
        this.props.passengers["child"] > this.props.passengers["senior"] ||
        this.props.passengers["child"] > this.props.passengers["student"])
    ) {
      Alert.alert("Çocuklar tek başına seyahat edemez.");
      passengers["child"] = 0;
    }
    if (
      (type == "adult" || type == "senior") &&
      (this.props.passengers["infant"] > this.props.passengers["adult"] ||
        this.props.passengers["infant"] > this.props.passengers["senior"])
    ) {
      Alert.alert("Bebek sayısı yetişkin sayısından fazla olamaz.");
      passengers["infant"] = count;
    }
    if (count < 0) {
      Alert.alert("Yolcu sayısı daha az olamaz");
    } else {
      passengers[type] = count;
      this.setState({ countPassenger: this.state.countPassenger - 1 });

      this.onPassenger(passengers);
    }
  }
  onIncrement(type) {
    if (
      type == "child" &&
      this.props.passengers["adult"] == 0 &&
      this.props.passengers["student"] == 0 &&
      this.props.passengers["senior"] == 0
    ) {
      Alert.alert("Çocuklar tek başına seyahat edemez.");
    } else if (
      type == "infant" &&
      this.props.passengers["adult"] == 0 &&
      this.props.passengers["senior"] == 0
    ) {
      Alert.alert("Bebek sayısı yetişkin sayısından fazla olamaz.");
    } else {
      let passengers = this.props.passengers;
      let count = passengers[type] + 1;
      passengers[type] = count;

      this.setState({ countPassenger: this.state.countPassenger + 1 });
      this.onPassenger(passengers);
    }
  }

  onPassenger(passengers) {
    setTimeout(() => {
      console.log("Countt Dene");
      console.log(this.state.countPassenger);
    }, 2000);
    this.props.setPassengers(passengers);
    // if (this.state.countPassenger > 0) {
    //   this.props.setPassengers(passengers);
    // } else {
    //   Alert.alert("Lütfen en az bir yolcu seçiniz");
    // }
  }
  /////////////////////
  render() {
    const { countPassenger, buttonDisable } = this.state;

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
                // console.log("PASSENGER SCREEN========>");
                // console.log(this.props.passengers);
                this.props.navigation.goBack();
              } else {
                Alert.alert("Lütfen en az bir yolcu seçiniz");
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
  };
};

const mapDispatchToProps = () => {
  return {
    setPassengers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PassengerScreen);

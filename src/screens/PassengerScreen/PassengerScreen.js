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
    let totalAdult = passengers["adult"] + passengers["senior"] + passengers["student"] - 1;
    console.log("Total Adult Count:", totalAdult);
    if (
      (type == "adult" || type == "senior" || type == "student") &&
      totalAdult < passengers["child"]
    ) {
      // ToastAndroid.showWithGravity(
      //   "Çocuklar tek başına seyahat edemez.",
      //   ToastAndroid.SHORT,
      //   ToastAndroid.CENTER,25,50
      // );
      Alert.alert("Bilgilendirme", "Çocuklar tek başına seyahat edemez.", [
        { text: "Tamam", onPress: () => null },
      ]);
      passengers["child"] = 0;
    }
    if (
      (type == "adult" || type == "senior") &&
      (this.props.passengers["infant"] > this.props.passengers["adult"] ||
        this.props.passengers["infant"] > this.props.passengers["senior"])
    ) {
      Alert.alert(
        "Bilgilendirme",
        "Bebek sayısı yetişkin sayısından fazla olamaz.",
        [{ text: "Tamam", onPress: () => null }]
      );
      passengers["infant"] = count;
    }
    if (count < 0) {
      Alert.alert("Bilgilendirme", "Yolcu sayısı daha az olamaz", [
        { text: "Tamam", onPress: () => null },
      ]);
    } else {
      passengers[type] = count;
      this.setState({ countPassenger: this.state.countPassenger - 1 });
      setTimeout(()=> {
        console.log("Azaldı",this.state.countPassenger);
      })
    }
    

    setTimeout(() => {console.log('==========================> GO BACK');
            
    console.log(this.props.passengers);},2000)
    // this.onPassenger(passengers);
  }
  onIncrement(type) {
    let passengers = this.props.passengers;
    let count = passengers[type] + 1;
    if (
      type == "child" &&
      this.props.passengers["adult"] == 0 &&
      this.props.passengers["student"] == 0 &&
      this.props.passengers["senior"] == 0
    ) {
      Alert.alert("Bilgilendirme", "Çocuklar tek başına seyahat edemez.", [
        { text: "Tamam", onPress: () => null },
      ]);
    }
    if (
      type == "infant" &&
      this.props.passengers["adult"] == 0 &&
      this.props.passengers["senior"] == 0
    ) {
      Alert.alert(
        "Bilgilendirme",
        "Bebek sayısı yetişkin sayısından fazla olamaz.",
        [{ text: "Tamam", onPress: () => null }]
      );
    } else {
      passengers[type] = count;

    this.setState({ countPassenger: this.state.countPassenger + 1 });
      setTimeout(()=> {
        console.log("Arttı:",this.state.countPassenger);
      })
    }

    
    // this.onPassenger(passengers);
  }

  onPassenger(passengers) {
    setTimeout(() => {
      console.log("========================");
      console.log("ON PASSENGER");
      console.log(this.state.countPassenger);
      console.log("========================");
    }, 3000);
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
              setTimeout(() => {
                console.log("========================");
                console.log("ON PRESS ONCE");
                console.log(this.state.countPassenger);
                console.log("========================");
              }, 2000);
              if (countPassenger > 0) {
                this.onPassenger(this.props.passengers);
                this.props.setNumberofPassenger(countPassenger);
                setTimeout(() => {
                  console.log("========================");
                  console.log("ON PRESS SONRA");
                  console.log(this.state.countPassenger);
                  console.log("========================");
                }, 2000);
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

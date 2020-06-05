import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 4,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 7,
    width: "50%",
    borderRadius: 4,
  },
  choosenButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 7,
    width: "50%",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#2dc44d",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    opacity: 0.8,
  },
  choosenButtonText: {
    fontWeight: "800",
    color: "#2dc44d",
  },
  checkIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 5,
    paddingTop: 5,
  },
});

const GREEN = "#2dc44d";
const GRAY = "#9b9e9f";
const WHITE = "#ffffff";

const FlightType = ({ flightOptionSelected, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => onPress(0)}
      style={[
        flightOptionSelected === 0 ? styles.choosenButton : styles.button,
      ]}
    >
      {flightOptionSelected === 0 && (
        <AntDesign
          style={styles.checkIcon}
          name="check"
          size={16}
          color={GREEN}
        />
      )}
      <Text
        style={[
          flightOptionSelected === 0
            ? styles.choosenButtonText
            : styles.buttonText,
        ]}
      >
        Tek Yön
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => onPress(1)}
      style={[
        flightOptionSelected === 1 ? styles.choosenButton : styles.button,
      ]}
    >
      {flightOptionSelected === 1 && (
        <AntDesign
          style={styles.checkIcon}
          name="check"
          size={16}
          color={GREEN}
        />
      )}

      <Text
        style={[
          flightOptionSelected === 1
            ? styles.choosenButtonText
            : styles.buttonText,
        ]}
      >
        Gidiş-Dönüş
      </Text>
    </TouchableOpacity>
  </View>
);
export default FlightType;

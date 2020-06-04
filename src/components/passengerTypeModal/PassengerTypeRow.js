import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    height: 60,
    alignItems: "center",
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    height: 60,
    alignItems: "center",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  passengerType: {
    fontSize: 18,
    // fontSize: 20,
    opacity: 0.6,
  },
  description: {
    fontSize: 14,
    opacity: 0.3,
    marginLeft: 10,
  },
  minus: {
    fontSize: 20,
    opacity: 0.3,
    marginHorizontal: 10,
    marginTop: 2,
  },
  number: {
    fontSize: 20,
    opacity: 0.7,
  },
  plus: {
    fontSize: 20,
    opacity: 0.9,
    marginHorizontal: 10,
    marginTop: 2,
  },
});

const GREEN = "#2dc44d";

const PassengerTypeRow = ({
  userType,
  userTypeDescription,
  userTypeAmount,
  increase,
  decrease,
}) => (
  <View style={styles.row}>
    <View style={styles.typeContainer}>
      <Text style={styles.passengerType}>{userType}</Text>
      <Text style={styles.description}>{userTypeDescription}</Text>
    </View>

    <View style={styles.amountContainer}>
      <TouchableOpacity onPress={decrease}>
        <Text style={styles.minus}>
          <AntDesign name="minuscircle" size={24} color={GREEN} />
        </Text>
      </TouchableOpacity>
      <Text style={styles.number}>0</Text>
      <TouchableOpacity onPress={increase}>
        <Text style={styles.plus}>
          <AntDesign name="pluscircle" size={24} color={GREEN} />
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default PassengerTypeRow;

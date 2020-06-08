import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export const PassengerRow = ({
  type,
  label,
  sub,
  count,
  onDecrement,
  onIncrement,
}) => (
  <View style={styles.viewStyle}>
    <View style={styles.viewStyle2}>
      <Text style={styles.labelStyle}>{label}</Text>
      <Text>
        {sub && <Text style={{ fontSize: 14, color: "#393939" }}>{sub}</Text>}
      </Text>
    </View>

    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // borderColor: "red",
        // borderWidth: 2,
      }}
    >
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => onDecrement(type)}
      >
        <AntDesign name="minuscircleo" size={24} color="black" />
      </TouchableHighlight>
      <Text style={styles.countStyle}>{count}</Text>
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => onIncrement(type)}
      >
        <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    borderBottomColor: "#c5c5c5",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewStyle2: {
    // borderWidth: 2,
    // borderColor: "blue",
    flex: 1,
    marginLeft: 9,
  },
  countStyle: {
    fontSize: 25,
    color: "#f6cc39",
    paddingHorizontal: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  labelStyle: {
    color: "#3b4653",
    fontSize: 19,
    fontWeight: "bold",
  },
});

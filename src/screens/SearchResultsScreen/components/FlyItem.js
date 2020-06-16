import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const FlyItem = ({
  carrierName,
  carrierCode,
  cabin,
  departureTime,
  originAirport,
  arriveTime,
  destinationAirport,
  segment,
  hour,
}) => {
  return (
    <View style={styles.container}>
      <ListItem
        carrierName={carrierName}
        carrierCode={carrierCode}
        cabin={cabin}
        departureTime={departureTime}
        originAirport={originAirport}
        arriveTime={arriveTime}
        destinationAirport={destinationAirport}
        segment={segment}
        hour={hour}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 5,
    margin: 5,
    padding: 5,
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 1,
  },
});

export default FlyItem;

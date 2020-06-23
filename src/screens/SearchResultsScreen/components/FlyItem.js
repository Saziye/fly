import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ListItem from "./ListItem";

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
  day,
  icon,
  price
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
        day={day}
        icon={icon}
      />
      
      <View style={{ borderWidth: 1, borderColor: "#c1c1c1" }}></View>
      <View style={styles.priceStyle}>
        <Text style={styles.textPrice}>{price} TL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    flexDirection: "row",
  },
  textPrice: {
    color: "#303030",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
  },
  priceStyle: {
    flexDirection: "row",
    alignItems: "center",
    //marginLeft: 10,
    // borderColor: 'red',
    // borderWidth:1,
    flex:1
  },
});

export default FlyItem;

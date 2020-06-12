import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ListItem from "./ListItem";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const FlyGroup = ({
  dCarrierName,
  dCarrierCode,
  dCabin,
  dDepartureTime,
  dOriginAirport,
  dArriveTime,
  dDestinationAirport,
  dSegment,
  dHour,
  rCarrierName,
  rCarrierCode,
  rCabin,
  rDepartureTime,
  rOriginAirport,
  rArriveTime,
  rDestinationAirport,
  rSegment,
  rHour,
  price,
  rday,
  dday
}) => {
  return (
    <View style={styles.container_top}>
      <View style={styles.container}>
        <View style={styles.container_one}>
          <ListItem
            carrierName={dCarrierName}
            carrierCode={dCarrierCode}
            cabin={dCabin}
            departureTime={dDepartureTime}
            originAirport={dOriginAirport}
            arriveTime={dArriveTime}
            destinationAirport={dDestinationAirport}
            segment={dSegment}
            hour={dHour}
            day = {dday}
          />
        </View>
        <View style={{ borderWidth: 1, borderColor: "#c1c1c1" }}></View>
        <View>
          <ListItem
            carrierName={rCarrierName}
            carrierCode={rCarrierCode}
            cabin={rCabin}
            departureTime={rDepartureTime}
            originAirport={rOriginAirport}
            arriveTime={rArriveTime}
            destinationAirport={rDestinationAirport}
            segment={rSegment}
            hour={rHour}
            day= {rday}
          />
        </View>
      </View>
      <View style={{ borderWidth: 1, borderColor: "#c1c1c1" }}></View>
      <View style={styles.priceStyle}>
        <Text style={styles.textPrice}>{price} TL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_top: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    flexDirection: "row",
  },
  container: {
    flexDirection: "column",
  },
  container_one: {
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

export default FlyGroup;

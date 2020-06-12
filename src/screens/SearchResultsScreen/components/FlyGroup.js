import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const FlyGroup = ({ departureDate, returnDate }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container_top}>
        <View style={styles.container}>
          <View style={styles.container_one}>
            <ListItem
              carrierName={"pegasus"}
              carrierCode={"PC2092"}
              cabin={"Ekonomi"}
              departureTime={"17:25"}
              originAirport={"SAW"}
              arriveTime={"18:50"}
              destinationAirport={"ADA"}
              segment={"Direkt"}
              hour={"1 sa 25 dk"}
            />
          </View>
          <View style={{borderWidth:1, borderColor:'#c1c1c1'}}></View>
          <View>
            <ListItem
              carrierName={"pegasus"}
              carrierCode={"PC2092"}
              cabin={"Ekonomi"}
              departureTime={"17:25"}
              originAirport={"SAW"}
              arriveTime={"18:50"}
              destinationAirport={"ADA"}
              segment={"Direkt"}
              hour={"1 sa 25 dk"}
            />
          </View>
        </View>
        <View style={{borderWidth:1, borderColor:'#c1c1c1'}}></View>
        <View style={styles.priceStyle}>
          <Text style={styles.textPrice}>257 TL</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    marginHorizontal:8
  },
  priceStyle: {
    borderColor: "blue",
    borderWidth: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default FlyGroup;

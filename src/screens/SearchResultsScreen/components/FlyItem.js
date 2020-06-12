import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";

const FlyItem = ({departureDate,returnDate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_one}>
        <Text style={styles.textStyle}> {departureDate} </Text>
        <FontAwesome5 name="exchange-alt" size={17} color="#453914" style={styles.iconStyle} />
        <Text style={styles.text2Style}> {returnDate} </Text>
      </View>
      <View style={styles.container_two}>
        <ListItem
          carrierName={"Pegasus"}
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom:5,
    borderColor:'red',
    borderWidth:1,
  },
  container_one: {
    backgroundColor: "#ffc501",
    height: 35,
    flexDirection: "column",
    justifyContent: 'center',
  },
  container_two: {
   // borderColor: "red",
    //borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    alignSelf: 'flex-start',
    padding:5,
  },
  text2Style: {
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    position: 'absolute',
    alignSelf: "flex-end",
    textAlign: 'center',
    padding: 5,
  },
  iconStyle: {
    alignSelf: 'center',
    position: 'absolute',
  },  
  closeStyle: {
    color: "#ffc501",
    marginRight:5,
  },
});

export default FlyItem;

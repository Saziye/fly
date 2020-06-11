import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";
import { AntDesign } from '@expo/vector-icons';

const FlyItem = ({title,date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_one}>
        <Text style={styles.textStyle}> {title} </Text>
        <Text style={styles.text2Style}> {date} </Text>
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
        <TouchableOpacity style={{justifyContent: "center"}}>
        <AntDesign name="closecircle" size={20} style={styles.closeStyle}/>
          {/* <Text style={styles.closeStyle}>x</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom:5,
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
    fontSize: 18,
    color: "#453914",
    fontWeight: "bold",
    alignSelf: 'flex-start',
    padding:5,
  },
  text2Style: {
    fontSize: 16,
    color: "#453914",
    fontWeight: "bold",
    position: 'absolute',
    alignSelf: "flex-end",
    textAlign: 'center',
    padding: 5,
    
  },
  closeStyle: {
    color: "#ffc501",
    marginRight:5,
  },
});

export default FlyItem;

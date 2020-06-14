import React from "react";
import { View, StyleSheet, Text, TouchableOpacity , Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/tr";
const ListItem = ({
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
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_one}>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri:
                `https://res.cloudinary.com/turna/image/upload/q_auto,f_auto/w_30/Images/Flight/Airlines/${icon}.png`,
            }}
          />
        </View>
        <View style={styles.cNameStyle}>
          <Text style={styles.cNameText}>{carrierName}</Text>
        </View>
        <View style={styles.cCodeStyle}>
          <Text style={styles.cCodeText}>{carrierCode}</Text>
        </View>
        <View style={styles.cabinStyle}>
          {cabin == "ECONOMY" ? (
            <Text style={styles.cabinText}>Ekonomi</Text>
          ) : cabin == "BUSINESS" ? (
            <Text style={styles.cabinText}>Bussiness</Text>
          ) : (
            <Text style={styles.cabinText}>First</Text>
          )}
        </View>
      </View>
      <View style={styles.container_two}>
        <View style={styles.container_three}>
          <View>
            <Text style={styles.textTime}>{departureTime}</Text>
          </View>
          <View>
            <Text style={styles.textAirport}>{originAirport}</Text>
          </View>
        </View>
        <View style={styles.container_three}>
          <View>
            <Text style={styles.textHour}>{hour}</Text>
          </View>
          <View style={{ width: 70, height: 30 }}>
            <MaterialCommunityIcons
              name="ray-start-arrow"
              size={30}
              color="#c1c1c1"
              style={{ alignSelf: "center" }}
            />
          </View>
          <View>
            {segment == 0 ? (
              <Text style={styles.textSegment}>Direkt</Text>
            ) : (
              <Text style={styles.textSegment}>{segment}</Text>
            )}
          </View>
        </View>
        <View style={styles.container_three}>
          <View>
            {day == false ? (
              <Text style={styles.textTimeRed}>{arriveTime}</Text>
            ) : (
              <Text style={styles.textTime}>{arriveTime}</Text>
            )}
          </View>
          <View>
            <Text style={styles.textAirport}>{destinationAirport}</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.priceStyle}>
        <Entypo name="flow-line" size={24} color="#c1c1c1" />
          <Text style={styles.textPrice}>257 TL</Text>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    //marginRight: 15,
  },
  container_one: {
    // borderColor: "blue",
    // borderWidth: 1,
    flexDirection: "column",
    marginLeft: 8,
    marginBottom: 5,
  },
  container_two: {
    // borderColor: "green",
    // borderWidth: 1,
    flexDirection: "row",
    marginLeft: 15,
    //flex:1
  },
    cNameStyle: {
      // borderColor: "black",
      // borderWidth: 1,
      width: 70,
    },
  cNameText: {
    color: "#383838",
    fontSize: 14,
  },
  //   cCodeStyle: {
  //     borderColor: "black",
  //     borderWidth: 1,
  //   },
  cCodeText: {
    color: "#303030",
    fontSize: 14,
    fontWeight: "bold",
  },
  //   cabinStyle: {
  //     borderColor: "black",
  //     borderWidth: 1,
  //   },
  cabinText: {
    color: "#383838",
    fontSize: 14,
  },
  container_three: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "column",
    marginHorizontal: 5,
    justifyContent: "center",

    // flex:1
  },
  textTime: {
    color: "#303030",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textTimeRed: {
    color: "#d90910",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textAirport: {
    color: "#383838",
    fontSize: 16,
    textAlign: "center",
  },
  textSegment: {
    color: "#383838",
    fontSize: 12,
    textAlign: "center",
  },
  textHour: {
    color: "#303030",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  textPrice: {
    color: "#303030",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 8,
  },
  priceStyle: {
    // borderColor: "blue",
    // borderWidth: 1,
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    // borderWidth:1,
    // borderColor: 'red',
    width:30,
    height:30,
    alignSelf:'flex-start',
  }
});

export default ListItem;

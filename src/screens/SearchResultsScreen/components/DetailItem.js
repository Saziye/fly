import React from "react";
import { View, StyleSheet, Text, TouchableOpacity , Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/tr";
import { AntDesign } from '@expo/vector-icons';

const DetailItem = ({
  carrierName,
  carrierCode,
  cabin,
  departureTime,
  originAirport,
  originAirportName,
  originCity,
  originCountry,
  arriveTime,
  destinationAirport,
  destinstionAirportCode,
  destinationCity,
  destinationCountry,
  segment,
  hour,
  day,
  icon,
}) => {
  return (
      <>
      <View style={{backgroundColor:'#ffc501', flexDirection: 'row', marginTop:3}}>
        <View style={{justifyContent: 'center', flexDirection:'row'}}>
            <Text style={{alignSelf: "center",textAlign: "center",color: "#474745", fontWeight:'bold', fontSize:15 }}>GİDİŞ</Text>
        </View>
        {/* <View style={{ borderWidth: 1, borderColor: "#c1c1c1", marginVertical:7, marginLeft:4}}></View> */}
            <View style={{justifyContent:'center', alignItems:'flex-start'}}>
                <View style={{justifyContent:'center', alignSelf:'center', flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>Paris </Text>
                <AntDesign name="arrowright" size={12} color="wite" style={{alignSelf:'center'}}/>
                <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}> Londra </Text>
                </View>
                
                <View style={{flexDirection:'row', marginLeft:10}}>
                    <Text style={{width:'31%', textAlign:'center', alignSelf:'center'}}>18 Temmuz Cumartesi</Text>
                    <Text style={{width:'31%', textAlign:'center',alignSelf:'center'}}>1 Aktarma</Text>
                    <Text style={{width:'31%', textAlign:'center',alignSelf:'center'}}>Toplam 15 sa 44 dk</Text>
                </View>
            </View>
    </View>
   
    <View style={styles.container}>
        <View style={styles.container_one}>
            <View>
            <Image
                style={styles.logo}
                // source={{
                //   uri:
                //     `https://res.cloudinary.com/turna/image/upload/q_auto,f_auto/w_30/Images/Flight/Airlines/${icon}.png`,
                // }}
            />
            </View>
            <View>
                <View style={styles.cNameStyle}>
                    <Text style={styles.cNameText}>American Airlines</Text>
                </View>
                <View style={styles.cNameStyle}>
                    <Text style={styles.cCodeText}>AA964</Text>
                </View>
                <View style={styles.cNameStyle}>
                    <Text style={styles.cabinText}>Ekonomi</Text>
                </View>
            </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#c1c1c1", marginVertical:7, marginHorizontal:5}}></View>
        <View style={styles.container_two}>
            <View style={styles.container_three}>
                <View>
                    <Text style={styles.textTime}>11:25</Text>
                </View>
                <View>
                    <Text style={styles.textAirport}>CDG</Text>
                </View>
                <View>
                    <Text style={styles.textSub}>Charles de Gaulle</Text>
                    <Text style={styles.textSub}>Paris</Text>
                    <Text style={styles.textSub}>Fransa</Text>
                </View>
            </View>
            <View style={styles.container_three}>
                <View>
                    <Text style={styles.textHour}>10 sa 20 dk</Text>
                </View>
                <View style={{ width: 80, height: 30, justifyContent:'center'}}>
                    <MaterialCommunityIcons
                    name="ray-start-arrow"
                    size={30}
                    color="#c1c1c1"
                    style={{ alignSelf: "center" }}
                    />
                </View>
            </View>
            <View style={styles.container_three}>
                <View>
                    {/* {day == false ? (
                    <Text style={styles.textTimeRed}>19:06</Text>
                    ) : (
                    <Text style={styles.textTime}>19:06</Text>
                    )} */}
                    <Text style={styles.textTime}>19:06</Text>
                </View>
                <View>
                    <Text style={styles.textAirport}>LAX</Text>
                </View>
                <View>
                    <Text style={styles.textSub}>Los Angeles</Text>
                    <Text style={styles.textSub}>Los Angeles</Text>
                    <Text style={styles.textSub}>Dallas</Text>
                </View>
            </View>
      </View>

       
    </View>
    
   <View style={{backgroundColor:'white', flexDirection: 'row', borderWidth:2, borderColor:'#c1c1c1', margin:5, padding:10, justifyContent:'center'}}>
        <View style={{justifyContent:'center', position:'absolute', left:20, alignSelf:'center'}}>
            <AntDesign name="clockcircleo" size={24} color="#ffc501" />
        </View>
        <View style={{flexDirection:'row', marginLeft:10, justifyContent:'center',alignSelf:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>Bekleme Süresi= </Text> 
            <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>18 sa 47 dk</Text> 
        </View>
   </View>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    //marginRight: 15,
    backgroundColor:'white',
    margin:5
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
    paddingHorizontal: 10,
  },
    cNameStyle: {
    //   borderColor: "black",
    //   borderWidth: 1,
      width: 70,
    },
  cNameText: {
    color: "#383838",
    fontSize: 14,
  },
  cCodeText: {
    color: "#303030",
    fontSize: 14,
    fontWeight: "bold",
  },
  cabinText: {
    color: "#383838",
    fontSize: 14,
  },
  container_three: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "column",
    marginRight: 5,
    justifyContent: "center",
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
    fontSize: 17,
    textAlign: "center",
    width:100
  },
  textSub: {
    color: "#383838",
    fontSize: 12,
    textAlign: "center",
    width:100
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
  logo: {
    // borderWidth:1,
    // borderColor: 'red',
    width:30,
    height:30,
    alignSelf:'center',
  },

});

export default DetailItem;

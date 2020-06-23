import React from "react";
import { View, StyleSheet, Text, TouchableOpacity , Image,ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/tr";
import { AntDesign } from '@expo/vector-icons';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

const DetailItem = ({
  item,
  selectedWay,
  flyObj,
  airports,
  originAirport,
  destinationAirport
}) => {

const dateConvert= (a,b)=> {
  var ilk = new Date(a);
  var son = new Date(b);
  var result = son-ilk;
  return (parseInt(result/1000/60/60)) + " sa " + parseInt(result/1000/60-parseInt(result/1000/60/60)*60) + " dk "
}

  return (
      <ScrollView>
        <View style={{backgroundColor:'#ffc501', flexDirection: 'row'}}>
        <View style={{justifyContent: 'center', flexDirection:'row'}}>
            <Text style={{alignSelf: "center",textAlign: "center",color: "#474745", fontWeight:'bold', fontSize:15 }}>GİDİŞ</Text>
        </View>
        {/* <View style={{ borderWidth: 1, borderColor: "#c1c1c1", marginVertical:7, marginLeft:4}}></View> */}
            <View style={{justifyContent:'center', alignItems:'flex-start'}}>
                <View style={{justifyContent:'center', alignSelf:'center', flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>{originAirport.CityName}</Text>
                <AntDesign name="arrowright" size={12} color="wite" style={{alignSelf:'center'}}/>
                <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>{destinationAirport.CityName}</Text>
                </View>
                
                <View style={{flexDirection:'row', marginLeft:10}}>
                    <Text style={{width:'31%', textAlign:'center', alignSelf:'center'}}>{moment(item.itineraries[0].segments[0].departure.at).format(
                    "DD MMMM YYYY dddd"
                  )}</Text>
                    <Text style={{width:'31%', textAlign:'center',alignSelf:'center'}}>{item.itineraries[0].segments.length - 1== 0 ? "Direkt" : item.itineraries[0].segments.length - 1 + " Aktarma"}</Text>
                    <Text style={{width:'31%', textAlign:'center',alignSelf:'center'}}>{"Toplam uçuş süresi " +moment.duration(item.itineraries[0].duration)._data.hours + " sa " +moment.duration(item.itineraries[0].duration)._data.minutes+" dk " }</Text>
                </View>
            </View>
        </View>
        
        
          {
             item.itineraries[0].segments.map((element,index) => {
               return (
                 <>
                <View style={styles.container}>
                <View style={styles.container_one}>
                    <View>
                    <Image
                        style={styles.logo}
                        source={{
                          uri:
                            `https://res.cloudinary.com/turna/image/upload/q_auto,f_auto/w_30/Images/Flight/Airlines/${item.validatingAirlineCodes}.png`,
                        }}
                    />
                    </View>
                    <View>
                        <View style={styles.cNameStyle}>
                            <Text style={styles.cNameText}>{flyObj.dictionaries.carriers[item.validatingAirlineCodes].toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}</Text>
                        </View>
                        <View style={styles.cNameStyle}>
                      <Text style={styles.cCodeText}>{element.carrierCode + element.number}</Text>
                        </View>
                        <View style={styles.cNameStyle}>
                      <Text style={styles.cabinText}>{item.travelerPricings[0].fareDetailsBySegment[0].cabin.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#c1c1c1", marginVertical:7, marginHorizontal:5}}></View>
                <View style={styles.container_two}>
                    <View style={styles.container_three}>
                        <View>
                            <Text style={styles.textTime}>{element.departure.iataCode}</Text>
                        </View>
                        <View>
                            <Text style={styles.textAirport}>{moment(element.departure.at).format("LT")}</Text>
                        </View>
                        <View>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.departure.iataCode.toLowerCase())[0].AirportName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.departure.iataCode.toLowerCase())[0].CityName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.departure.iataCode.toLowerCase())[0].CountryName}</Text>
                        </View>
                    </View>
                    <View style={styles.container_three}>
                        <View>
                            <Text style={styles.textHour}>{moment.duration(element.duration)._data.hours + " sa " +moment.duration(element.duration)._data.minutes+" dk "}</Text>
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
                            <Text style={styles.textTime}>{element.arrival.iataCode}</Text>
                        </View>
                        <View>
                            <Text style={styles.textAirport}>{moment(element.arrival.at).format('LT')}</Text>
                        </View>
                        <View>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.arrival.iataCode.toLowerCase())[0].AirportName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.arrival.iataCode.toLowerCase())[0].CityName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.arrival.iataCode.toLowerCase())[0].CountryName}</Text>
                        </View>
                    </View>
              </View>
              </View>
                
                {
                  item.itineraries[0].segments.length-1>=index+1 && (
                <View style={{backgroundColor:'white', flexDirection: 'row', borderWidth:2, borderColor:'#c1c1c1', margin:5, padding:10, justifyContent:'center'}}>
                  <View style={{justifyContent:'center', position:'absolute', left:20, alignSelf:'center'}}>
                      <AntDesign name="clockcircleo" size={24} color="#ffc501" />
                  </View>
                  <View style={{flexDirection:'row', marginLeft:10, justifyContent:'center',alignSelf:'center'}}>
                      <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>Bekleme Süresi= </Text> 
                      <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>
                        {
                          dateConvert(element.arrival.at,item.itineraries[0].segments[index+1].departure.at )
                        }
                      </Text> 
                  </View>
                </View>
                  )
                }
                
     </>
               )
              
           })
          }
          
        {
          selectedWay == 1 && (
        <>
        <View style={{backgroundColor:'#ffc501', flexDirection: 'row', marginTop:3}}>
        <View style={{justifyContent: 'center', flexDirection:'row'}}>
            <Text style={{alignSelf: "center",textAlign: "center",color: "#474745", fontWeight:'bold', fontSize:15 }}>DÖNÜŞ</Text>
        </View>
        {/* <View style={{ borderWidth: 1, borderColor: "#c1c1c1", marginVertical:7, marginLeft:4}}></View> */}
            <View style={{justifyContent:'center', alignItems:'flex-start'}}>
                <View style={{justifyContent:'center', alignSelf:'center', flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>{destinationAirport.CityName}</Text>
                <AntDesign name="arrowright" size={12} color="wite" style={{alignSelf:'center'}}/>
                <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>{originAirport.CityName}</Text>
                </View>
                
                <View style={{flexDirection:'row', marginLeft:10}}>
                    <Text style={{width:'31%', textAlign:'center', alignSelf:'center'}}>{moment(item.itineraries[1].segments[0].departure.at).format(
                    "DD MMMM YYYY dddd"
                  )}</Text>
                    <Text style={{width:'31%', textAlign:'center',alignSelf:'center'}}>{ item.itineraries[1].segments.length - 1== 0 ? "Direkt" : item.itineraries[1].segments.length - 1 + " Aktarma"}</Text>
                    <Text style={{width:'31%', textAlign:'center',alignSelf:'center'}}>{"Toplam " +moment.duration(item.itineraries[1].duration)._data.hours + " sa " +moment.duration(item.itineraries[1].duration)._data.minutes+" dk " }</Text>
                </View>
            </View>
        </View>
        
        
          {
             item.itineraries[1].segments.map((element,index) => {
               return (
                 <>
                <View style={styles.container}>
                <View style={styles.container_one}>
                    <View>
                    <Image
                        style={styles.logo}
                        source={{
                          uri:
                            `https://res.cloudinary.com/turna/image/upload/q_auto,f_auto/w_30/Images/Flight/Airlines/${item.validatingAirlineCodes}.png`,
                        }}
                    />
                    </View>
                    <View>
                        <View style={styles.cNameStyle}>
                            <Text style={styles.cNameText}>{flyObj.dictionaries.carriers[item.validatingAirlineCodes].toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}</Text>
                        </View>
                        <View style={styles.cNameStyle}>
                      <Text style={styles.cCodeText}>{element.carrierCode + element.number}</Text>
                        </View>
                        <View style={styles.cNameStyle}>
                      <Text style={styles.cabinText}>{item.travelerPricings[0].fareDetailsBySegment[0].cabin.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#c1c1c1", marginVertical:7, marginHorizontal:5}}></View>
                <View style={styles.container_two}>
                    <View style={styles.container_three}>
                        <View>
                            <Text style={styles.textTime}>{element.departure.iataCode}</Text>
                        </View>
                        <View>
                            <Text style={styles.textAirport}>{moment(element.departure.at).format("LT")}</Text>
                        </View>
                        <View>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.departure.iataCode.toLowerCase())[0].AirportName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.departure.iataCode.toLowerCase())[0].CityName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.departure.iataCode.toLowerCase())[0].CountryName}</Text>
                        </View>
                    </View>
                    <View style={styles.container_three}>
                        <View>
                            <Text style={styles.textHour}>{moment.duration(element.duration)._data.hours + " sa " +moment.duration(element.duration)._data.minutes+" dk "}</Text>
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
                            <Text style={styles.textTime}>{element.arrival.iataCode}</Text>
                        </View>
                        <View>
                            <Text style={styles.textAirport}>{moment(element.arrival.at).format('LT')}</Text>
                        </View>
                        <View>
                        <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.arrival.iataCode.toLowerCase())[0].AirportName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.arrival.iataCode.toLowerCase())[0].CityName}</Text>
                            <Text style={styles.textSub}>{airports.filter(i => i.AirportCode.toLowerCase() == element.arrival.iataCode.toLowerCase())[0].CountryName}</Text>
                        </View>
                    </View>
              </View>
              </View>
                
                {
                  item.itineraries[1].segments.length-1>=index+1 && (
                <View style={{backgroundColor:'white', flexDirection: 'row', borderWidth:2, borderColor:'#c1c1c1', margin:5, padding:10, justifyContent:'center'}}>
                  <View style={{justifyContent:'center', position:'absolute', left:20, alignSelf:'center'}}>
                      <AntDesign name="clockcircleo" size={24} color="#ffc501" />
                  </View>
                  <View style={{flexDirection:'row', marginLeft:10, justifyContent:'center',alignSelf:'center'}}>
                      <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>Bekleme Süresi= </Text> 
                      <Text style={{fontWeight:'bold', fontSize:13, alignSelf:'center'}}>
                        {
                          dateConvert(element.arrival.at,item.itineraries[1].segments[index+1].departure.at )
                        }
                      </Text> 
                  </View>
                </View>
                  )
                }
                
     </>
               )
              
           })
          }
          
        </>
          ) 
        }

    
   

      </ScrollView>
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
    flex:1
  },
    cNameStyle: {
      // borderColor: "black",
      // borderWidth: 1,
      width: 60,
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
    flex:1,
    // borderWidth: 1,
    // borderColor: "red",
    alignItems:'center',
    flexDirection: "column",
    marginRight: 5,
    justifyContent: "center",
  },
  textTime: {
    color: "#303030",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width:100

  },
  textTimeRed: {
    color: "#d90910",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width:100
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
    width:90
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

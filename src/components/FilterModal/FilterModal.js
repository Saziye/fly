import * as React from "react";
import { View, StyleSheet, Dimensions, Text, Button, Alert} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Airline from "./component/Airline";
import Airway from "./component/Airway";
import Class from "./component/Class";
import Clock from "./component/Clock";
import Price from "./component/Price";
import Transfer from "./component/Transfer";
import { TouchableOpacity } from "react-native";
//const initialLayout = { width: Dimensions.get('window').width };

const FilterModal = (props) => {
  const { 
    segments, 
    segmentsCheckList, 
    returnSegments, 
    returnSegmentsCheckList, 
    selectedWay, 
    // allClockGoDep,
    // allClockGoArr,
    // allClockRetDep,
    // allClockRetArr,
    allPriceArr,
    price,
    airlines,
    airlinesCheckList,
    returnAirlines,
    returnAirlinesCheckList,
    airways,
    airwaysCheckList,
    cabinClass,
    cabinClassCheckList,
  } = props;

  const [index, setIndex] = React.useState(0);
  const [newPrice, setNewPrice] = React.useState(price);
  const isFalse = (currentValue) => currentValue == false;
  const [routes] = React.useState([
    { key: "transfer", title: "Aktarma", icon: "swap" },
    { key: "airway", title: "Havayolu", icon: "globe" },
    { key: "airline", title: "Havalimanı", icon: "paper-plane" },
    { key: "class", title: "Sınıf", icon: "ticket" },
    { key: "price", title: "Fiyat", icon: "price-tag" },
    { key: "clock", title: "Saat/Süre", icon: "clock" },
  ]);

  const TransferRoute = () => (
    <Transfer 
      segments={segments} 
      segmentsCheckList={segmentsCheckList} 
      returnSegments={returnSegments} 
      returnSegmentsCheckList={returnSegmentsCheckList}  
    />
  );

  const ClockRoute = () => (
    <Clock 
      // allClockGoDep={allClockGoDep}
      // allClockGoArr={allClockGoArr}
      // allClockRetDep={allClockRetDep}
      // allClockRetArr={allClockRetArr}
    />
  );

  // const dene = (e) => {
  //   console.log("ÇAlıştııığğğ");
  //   setNewPrice(e);
  //   console.log(newPrice);
  // }

  const PriceRoute = () => (
    <Price 
      allPriceArr={allPriceArr}
      price= {price}
      // setPriceFunc= {()=>setNewPrice()}
      setPriceFunc= {(e)=> (setNewPrice(e))}
    />
  );

  const AirLineRoute = () => (
    <Airline 
      airlines={airlines}
      airlinesCheckList={airlinesCheckList}
      returnAirlines={returnAirlines}
      returnAirlinesCheckList={returnAirlinesCheckList}
    />
  );

  const AirWayRoute = () => (
    <Airway 
      airways={airways}
      airwaysCheckList={airwaysCheckList}
    />
  );

  const ClassRoute = () =>( 
    <Class 
      cabinClass={cabinClass}
      cabinClassCheckList={cabinClassCheckList}
    />
  );

  const renderScene = SceneMap({
    clock: ClockRoute,
    airway: AirWayRoute,
    airline: AirLineRoute,
    transfer: TransferRoute,
    class: ClassRoute,
    price: PriceRoute,
  });
  console.log("===========");
  console.log("FILTERMODAL SAYFASINDA");
  console.log("segmentsCheckList: ",segmentsCheckList);
  console.log("segments: ",segments);
  console.log("returnSegments: ",returnSegments);
  console.log("returnSegmentsCheckList: ",returnSegmentsCheckList);
  console.log("price:", {newPrice});
  console.log("airlinesCheckList: ",airlinesCheckList);
  console.log("airlines: ",airlines);
  console.log("returnAirlines: ",returnAirlines);
  console.log("returnAirlinesCheckList: ",returnAirlinesCheckList);
  console.log("airways: ",airways);
  console.log("airwaysCheckList: ",airwaysCheckList);
  console.log("cabinClass: ",cabinClass);
  console.log("cabinClassCheckList: ",cabinClassCheckList);
  console.log("===========");
  
  const renderIcon = ({ route }) => (
    <Entypo name={route.icon} size={24} color={"#343434"} />
  );
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      scrollEnabled
      style={styles.tabbar}
      labelStyle={styles.label}
      renderIcon={renderIcon}
      tabStyle={styles.tab}
      activeColor={"#ffc501"}
      getLabelText={({ route }) => route.title}
    />
  );
  
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => {
            props.onClick(false);
            if(selectedWay == 0) {
              if(segmentsCheckList.every(isFalse) == true || airlinesCheckList.every(isFalse) == true || airwaysCheckList.every(isFalse) || cabinClassCheckList.every(isFalse)) {
                Alert.alert("Bilgilendirme", "Lütfen en az birini seçin ", [
                  { text: "Tamam", onPress: () => null },
                ]);
              } else {
                console.log({newPrice});
                props.onPress(segmentsCheckList,returnSegmentsCheckList,newPrice,airlinesCheckList,returnAirlinesCheckList,airwaysCheckList,cabinClassCheckList);
              }
            } else {
              if((segmentsCheckList.every(isFalse) == true && returnSegmentsCheckList.every(isFalse) == true) || (airlinesCheckList.every(isFalse) == true && returnAirlinesCheckList.every(isFalse) == true) || (airwaysCheckList.every(isFalse) || cabinClassCheckList.every(isFalse))) {
                Alert.alert("Bilgilendirme", "Lütfen en az birini seçin", [
                  { text: "Tamam", onPress: () => null },
                ]);
              }else {
                props.onPress(segmentsCheckList, returnSegmentsCheckList, newPrice,airlinesCheckList,returnAirlinesCheckList,airwaysCheckList,cabinClassCheckList);
              }
            }
          }}
          style={styles.touch}
        >
          <Text style={styles.textStyle}>Uygula</Text>
        </TouchableOpacity>
        <View style={styles.close} >
          <AntDesign
            name="left"
            size={28}
            color="white"
            onPress={() => {
              props.onClick(false);
            }}
          />
        </View>
        <Text style={styles.headerText}>Filtreler</Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        //initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  );
};
const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#eaeaea",
    // borderColor: 'red',
    // borderWidth:1,
  },
  label: {
    color: "#343434",
    fontSize: 10,
    textAlign: "center",
  },
  tab: {
    borderRightColor: "white",
    borderRightWidth: 3,
    width:100
  },
  indicator: {
    backgroundColor: "#ffc501",
  },
  container: {
    backgroundColor: "#16416c",
    height: 40,
    justifyContent: "center",
    flexDirection:'row',
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    color: "white",
  },
  touch: {
    position:'absolute',
    right:7,
    alignSelf:'center',
  },
  close:{
    position:'absolute',
    left:7,
    alignSelf:'center',
  }
});

export default FilterModal;

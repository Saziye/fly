import * as React from "react";
import { View, StyleSheet, Dimensions, Text, Button } from "react-native";
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

const ClockRoute = () => <Clock />;
const AirWayRoute = () => <Airway />;
const AirLineRoute = () => <Airline />;
const ClassRoute = () => <Class />;
const PriceRoute = () => <Price />;

//const initialLayout = { width: Dimensions.get('window').width };

const FilterModal = (props) => {
  const { segments, segmentsCheckList, onPress } = props;

  const [index, setIndex] = React.useState(0);
  const [newSegments, newSetSegments] = segmentsCheckList;

  const [routes] = React.useState([
    { key: "transfer", title: "Aktarma", icon: "swap" },
    { key: "clock", title: "Saat/Süre", icon: "clock" },
    { key: "airway", title: "Havayolu", icon: "globe" },
    { key: "airline", title: "Havalimanı", icon: "paper-plane" },
    { key: "class", title: "Sınıf", icon: "ticket" },
    { key: "price", title: "Fiyat", icon: "price-tag" },
  ]);

  const TransferRoute = () => (
    <Transfer segments={segments} segmentsCheckList={segmentsCheckList} />
  );
  console.log(props.segments);
  const renderScene = SceneMap({
    clock: ClockRoute,
    airway: AirWayRoute,
    airline: AirLineRoute,
    transfer: TransferRoute,
    class: ClassRoute,
    price: PriceRoute,
  });
  console.log("===========");
  //const a = onPress(segmentsCheckList);
  console.log(segmentsCheckList);

  console.log("FILTERMODAL SAYFASINDA");

  console.log("===========");
  console.log(segmentsCheckList);
  const renderIcon = ({ route }) => (
    <Entypo name={route.icon} size={24} color={"#343434"} />
  );
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      //scrollEnabled
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
        {/* <TouchableOpacity 
          onPress={() => {
            props.onPress(segmentsCheckList);
          }}
        >
          <Text style={styles.btnStyle}>Uygula</Text>
        </TouchableOpacity> */}
        <Button  
        title= "Uygula"
        onPress={() => {
            props.onPress(segmentsCheckList);
            props.onClick(false);
          }}
          />
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
FilterModal.navigationOptions = ({ navigation }) => ({
  title: "Filtreler",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
  },
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#16416c",
  },
  headerRight: (
    <Text
      style={{
        color: "white",
        fontSize: 14,
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold",
        marginRight: 15,
      }}
    >
      Uygula
    </Text>
  ),
  headerLeft: (
    <View style={{ marginLeft: 15 }}>
      <AntDesign
        name="left"
        size={32}
        color="white"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  ),
});
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
  },
  indicator: {
    backgroundColor: "#ffc501",
  },
  container: {
    backgroundColor: "#16416c",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
  },
  btnStyle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "white",
    position: "absolute",
    left: 10,
    borderWidth: 1,
    borderColor: "white",
    padding: 3,
  },
});

export default FilterModal;

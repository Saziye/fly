import * as React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const ClockRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const AirWayRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const AirLineRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const TransferRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ClassRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const PriceRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);


//const initialLayout = { width: Dimensions.get('window').width };

export default function FilterScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'clock', title: 'Saat/Süre', icon: 'clock'},
    { key: 'airway', title: 'Havayolu', icon: 'globe' },
    { key: 'airline', title: 'Havalimanı', icon: 'paper-plane' },
    { key: 'transfer', title: 'Aktarma', icon: '' },
    { key: 'class', title: 'Sınıf', icon: 'ticket' },
    { key: 'price', title: 'Fiyat',icon: 'price-tag' },
  ]);

  const renderScene = SceneMap({
    clock: ClockRoute,
    airway: AirWayRoute,
    airline: AirLineRoute,
    transfer: TransferRoute,
    class: ClassRoute,
    price: PriceRoute,
  });

  const renderIcon = ({ route}) => (
    <Entypo name={route.icon} size={24} color={'#343434'} />
  );
  const renderTabBar = props => (
    <TabBar
    {...props}
      indicatorStyle={styles.indicator}
      //scrollEnabled
      style={styles.tabbar}
      labelStyle={styles.label}
      renderIcon= {renderIcon}
      tabStyle={styles.tab}
      activeColor= {'#ffc501'}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      //initialLayout={initialLayout}
      renderTabBar= {renderTabBar}
    />
  );
}
FilterScreen.navigationOptions = ({ navigation }) => ({
  title: 'Filtreler',
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
  headerRight:(
    <Text style= {{color: 'white',fontSize: 14,
    alignSelf: "center",
    textAlign: "center", fontWeight: "bold", marginRight: 15}}>Uygula</Text>
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
  scene: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#eaeaea',
    borderColor: 'red',
    borderWidth:1
  },
  label: {
    color: '#343434',
    fontSize: 12,
    textAlign: 'center',
  },
  tab: {
    borderColor: 'blue',
    borderWidth:1,
  },
  indicator: {
    backgroundColor: '#ffc501',
  }
});
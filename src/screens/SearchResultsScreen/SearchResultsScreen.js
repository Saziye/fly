import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import { getFlights } from "../../services/amadeusService";
import ListRow from "./components/ListRow";
import FlyItem from './components/FlyItem';

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // componentDidMount() {
  //   console.log("DID MOUNT FLIGHTS");
  //   getFlights("SYD", "BKK", "2020-09-01", "2020-09-05", "2");
  // }
  static navigationOptions = ({ navigation }) => ({
    title: "dene",
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
    headerRight: null,
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

  render() {
    const {} = this.state;

    return (
      <View style={styles.container}>
        <FlyItem title={"Gidiş"} date= {"02 Temmuz 2020 Perşembe"}/>
        <FlyItem title={"Dönüş"} date= {"02 Temmuz 2020 Perşembe"}/>
        <ListRow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16416c',
        flex:1,
    }
});

export default SearchResultsScreen;

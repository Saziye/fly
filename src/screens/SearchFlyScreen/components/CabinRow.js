import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import CabinItem from "./CabinItem";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
class CabinRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const {} = this.state;
    return (
      <View style={styles.container}>
        <CabinItem
          icon={<MaterialIcons name="person" size={30} color="white" />}
          count={"1"}
          title={"Yetişkin"}
          //click={}
        />
         <CabinItem
          icon={<MaterialIcons name="person" size={30} color="white" />}
          title={"Bussiness"}
          //click={}
        />
        <CabinItem
          icon={<MaterialIcons name="person" size={30} color="white" />}
          title={"Direkt Uçuşlar"}
          //click={}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 8,
    width: "100%",
    paddingHorizontal: 25,
    // borderColor: 'yellow',
    // borderWidth: 2
  },
});

export default CabinRow;

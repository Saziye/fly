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
  }

  render() {
    const {} = this.state;
    return (
      <View style={styles.container}>
        <CabinItem
          icon={<MaterialIcons name="person" size={24} color="white" />}
          title={"1 Yetişkin"}
          //click={}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "column",
    marginTop: 30,
    // marginHorizontal: '10%',
    // height: '40%',
    width: "100%",
    borderColor: 'yellow',
    borderWidth: 2
  },
});

export default CabinRow;

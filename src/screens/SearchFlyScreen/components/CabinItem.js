import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const WHITE = "#fff";

const CabinItem = ({ icon, count, title, rightIcon, click }) => {
  return (
    <View>
      <TouchableOpacity onPress={click} style={styles.container}>
        <View style={styles.iconStyle}>{icon}</View>
        <View style={styles.titleStyle}>
          {/* <Text style={styles.textTitle}>{count}</Text> */}
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View style={styles.rightIconStyle}>{rightIcon}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 4,
    borderBottomColor: 'white',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderTopColor: 'white',
    // borderColor: "blue",
    // borderWidth: 2,
  },
  iconStyle: {
    // borderColor: "red",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    flex:1,
    // borderColor: "green",
    // borderWidth: 2,
    alignItems: "center",
    //justifyContent: "center",
    marginLeft: 5,
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 20,
    textAlign: "center",
    color: WHITE,
    fontWeight: "normal",
    padding: 5
  },
  rightIconStyle: {
    // borderColor: "pink",
    // borderWidth: 2,
  },
});

export default CabinItem;

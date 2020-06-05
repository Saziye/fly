import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const WHITE = "#fff";

const CabinItem = ({ icon, title, rightIcon, click }) => {
  return (
    <View >
      <TouchableOpacity onPress={click} style={styles.container}>
        <View style={styles.iconStyle}>{icon}</View>
        <View style={styles.titleStyle}>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View style={styles.rightIconStyle}>{rightIcon}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    // width: "40%",
    // margin: 5,
    // padding: 5,
    borderColor: "blue",
    borderWidth: 2,
  },
  iconStyle: {
    borderColor: "red",
    borderWidth: 2,
  },
  titleStyle: {
    borderColor: "green",
    borderWidth: 2,
  },
  textTitle: {
    fontSize: 12,
    textAlign: "center",
    color: WHITE,
    fontWeight: 'bold',
  },
  rightIconStyle: {
    borderColor: "pink",
    borderWidth: 2,
  },
});

export default CabinItem;

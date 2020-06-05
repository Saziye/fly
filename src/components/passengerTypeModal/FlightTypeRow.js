import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const styles = StyleSheet.create({
  row: {
      width: '90%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    height: 60,
    alignItems: "center",
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    height: 60,
    alignItems: "center",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  passengerType: {
    fontSize: 18,
    opacity: 0.7,
  },
  description: {
    fontSize: 16,
    opacity: 0.3,
    marginLeft: 10,
  },
  minus: {
    fontSize: 20,
    opacity: 0.3,
    marginHorizontal: 10,
    marginTop: 2,
  },
  number: {
    fontSize: 20,
    opacity: 0.7,
  },
  plus: {
    fontSize: 20,
    opacity: 0.9,
    marginHorizontal: 10,
    marginTop: 2,
  },
});

const GREEN = "#2dc44d";
const GRAY = "#9b9e9f";

var radio_props = [
  { label: "param1", value: 0 },
  { label: "param2", value: 1 },
];

const FlightTypeRow = ({flightOptions}) => (
  <RadioForm formHorizontal={false} animation={true}>
    {/* To create radio buttons, loop through your array of options */}
    {flightOptions.map((obj, i) => (
      <RadioButton labelHorizontal={true} key={i}>
        <View style={styles.row}>
          {/*  You can set RadioButtonLabel before RadioButtonInput */}
          <View style={styles.typeContainer}>
            <Text style={styles.passengerType}>{obj.label}</Text>
          </View>

          <View style={styles.amountContainer}>
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={i==0}
              // onPress={onPress}
              borderWidth={2}
              buttonInnerColor={GREEN}
              buttonOuterColor={GRAY}
              buttonSize={18}
              buttonOuterSize={25}
              buttonStyle={{
                
              }}
              buttonWrapStyle={{ marginLeft: 10 }}
              
            />
          </View>
          {/* <RadioButtonLabel
            obj={obj}
            index={i}
            labelHorizontal={true}
            // onPress={onPress}
            labelStyle={{ fontSize: 20, color: "#2ecc71" }}
            labelWrapStyle={{}}
          /> */}
          {/* <RadioButtonInput
            obj={obj}
            index={i}
            // isSelected={this.state.value3Index === i}
            // onPress={onPress}
            borderWidth={1}
            buttonInnerColor={"#e74c3c"}
            // buttonOuterColor={this.state.value3Index === i ? "#2196f3" : "#000"}
            buttonSize={20}
            buttonOuterSize={20}
            buttonStyle={{}}
            buttonWrapStyle={{ marginLeft: 10 }}
          /> */}
        </View>
      </RadioButton>
    ))}
  </RadioForm>
);
export default FlightTypeRow;

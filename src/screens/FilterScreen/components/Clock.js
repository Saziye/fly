import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "react-native-elements";


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 15 };
  }
  render() {
    const { value } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container_one}>
          <Text style={styles.textStyle}>GİDİŞ</Text>
        </View>
        <View>
          <Slider
            value={value}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(value) => this.setState({ value })}
          />
          <Text>Value: {this.state.value}</Text>
        </View>
        <View style={styles.container_one}>
          <Text style={styles.textStyle}>DÖNÜŞ</Text>
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  container_one: {
    backgroundColor: "#343434",
    height: 40,
    justifyContent: "center",
  },
  container_two: {},
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffc501",
    textAlign: "center",
  },
});

export default Clock;

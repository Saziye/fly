import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "react-native-elements";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      goDepValue: '',
      goArrValue: '',
      retDepValue: '',
      retArrValue: ''
     };
  }
  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });
  render() {
    const { goDepValue,goArrValue,retDepValue,retArrValue } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container_one}>
          <Text style={styles.textStyle}>GİDİŞ</Text>
        </View>
        <View>
          <Text style={styles.labelText}> Kalkış Saati</Text>
          <Slider
            value={goDepValue}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(goDepValue) => this.setState({ goDepValue })}
          />
          <Text> {goDepValue}</Text>
        </View>
        <View>
          <Text style={styles.labelText}> Varış Saati</Text>
          <Slider
            value={goArrValue}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(goArrValue) => this.setState({ goArrValue })}
          />
          <Text>{goArrValue}</Text>
        </View>
        <View style={styles.container_one}>
          <Text style={styles.textStyle}>DÖNÜŞ</Text>
        </View>
        <View>
          <Text style={styles.labelText}> Kalkış Saati</Text>
          <Slider
            value={retDepValue}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(retDepValue) => this.setState({ retDepValue })}
          />
          <Text> {retDepValue}</Text>
        </View>
        <View>
          <Text style={styles.labelText}> Varış Saati</Text>
          <Slider
            value={retArrValue}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(retArrValue) => this.setState({ retArrValue })}
          />
          <Text>{retArrValue}</Text>
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
  labelText: {
    fontSize: 17,
    marginVertical: 10

  }
});

export default Clock;

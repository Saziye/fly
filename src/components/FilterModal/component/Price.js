import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "react-native-elements";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceValue: "",
    };
  }
  // enableScroll = () => this.setState({ scrollEnabled: true });
  // disableScroll = () => this.setState({ scrollEnabled: false });
  render() {
    const { priceValue } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container_header}>
          <Text style={styles.textHeader}>FİYAT</Text>
        </View>
        <View style={styles.container_one}>
          
          <View style={styles.container_three}>
            <Text style={styles.textStyle}>Min TL</Text>
            <Text style={styles.textStyle2}>Max TL</Text>
          </View>
          <Slider
            value={priceValue}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(priceValue) => this.setState({ priceValue })}
          />
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelText}> Fiyat: </Text>
          <Text style= {{textAlign: 'center', marginVertical:10}}>  {priceValue}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_one: {
    marginHorizontal: 10,
  },
  container_three: {
    flexDirection: "row",
    position: "relative",
    marginTop: 10
  },
  labelText: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "bold",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textStyle2: {
    right: 0,
    position: "absolute",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  container_header: {
    backgroundColor: "#343434",
    height: 40,
    justifyContent: "center",
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffc501",
    textAlign: "center",
  },
});

export default Price;

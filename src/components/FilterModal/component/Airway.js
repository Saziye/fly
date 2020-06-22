import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList} from "react-native";
import { CheckBox } from "react-native-elements";


class Airway extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airways: this.props.airways,
      airwaysCheckList:this.props.airwaysCheckList
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderOption = ({ item, index }) => (
    <View>
      <CheckBox
        title={item.toLowerCase()
          .split(" ")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")}
        checked={this.state.airwaysCheckList[index]}
        checkedColor={"#ffc501"}
        onPress={() => {
          this.state.airwaysCheckList[index] = !this.state.airwaysCheckList[index];
          console.log("burası airway.js");
          console.log(this.state.airwaysCheckList);
          this.setState({
            airwaysCheckList: this.state.airwaysCheckList,
          });
        }}
      />
    </View>
  );

  render() {
    const {} = this.state;

    return (
      <View style={styles.container}>
          <View>
            <View>
              <FlatList
                data={this.state.airways}
                keyExtractor={(item) => item}
                renderItem={(item, index) => this.renderOption(item, index)}
              />
            </View>
          </View>
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

export default Airway;

import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList} from "react-native";
import { CheckBox } from "react-native-elements";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinClass: this.props.cabinClass,
      cabinClassCheckList:this.props.cabinClassCheckList
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
        checked={this.state.cabinClassCheckList[index]}
        checkedColor={"#ffc501"}
        onPress={() => {
          this.state.cabinClassCheckList[index] = !this.state.cabinClassCheckList[index];
          console.log("burası cabin.js");
          console.log(this.state.cabinClassCheckList);
          this.setState({
            cabinClassCheckList: this.state.cabinClassCheckList,
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
                data={this.state.cabinClass}
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

export default Class;

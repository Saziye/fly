import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";


class Airline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airlines: this.props.airlines,
      airlinesCheckList: this.props.airlinesCheckList,
      returnAirlines: this.props.returnAirlines,
      returnAirlinesCheckList: this.props.returnAirlinesCheckList
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderOption = ({ item, index }) => (
    <View>
      <CheckBox
        title={item}
        checked={this.state.airlinesCheckList[index]}
        checkedColor={"#ffc501"}
        onPress={() => {
          this.state.airlinesCheckList[index] = !this.state.airlinesCheckList[
            index
          ];
          console.log("burası airline.js");
          console.log(this.state.airlinesCheckList);
          this.setState({
            airlinesCheckList: this.state.airlinesCheckList,
          });
        }}
      />
    </View>
  );
  renderOptionReturn = ({ item, index }) => (
    <View>
      <CheckBox
        title={item}
        checked={this.state.returnAirlinesCheckList[index]}
        checkedColor={"#ffc501"}
        onPress={() => {
          this.state.returnAirlinesCheckList[index] = !this.state.returnAirlinesCheckList[
            index
          ];
          console.log("burda");
          console.log(this.state.returnAirlinesCheckList);
          this.setState({
            returnAirlinesCheckList: this.state.returnAirlinesCheckList,
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
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>GİDİŞ</Text>
            </View>
            <View>
              <FlatList
                data={this.state.airlines}
                keyExtractor={(item) => item}
                renderItem={(item, index) => this.renderOption(item, index)}
              />
            </View>
          </View>
          {this.props.selectedWay == 1 ? (
          <View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>DÖNÜŞ</Text>
            </View>
            <View>
              <FlatList
                data={this.state.returnAirlines}
                keyExtractor={(item) => item}
                renderItem={(item, index) => this.renderOptionReturn(item, index)}
              />
            </View>
          </View>
        ) : null }
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

const mapStateToProps = (state) => {
  return {
    selectedWay: state.passenger.selectedWay,
  };
};

export default connect(mapStateToProps)(Airline);

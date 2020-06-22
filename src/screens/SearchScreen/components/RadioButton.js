import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
 
class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCabin: '',
      // selected: false,
      selected: props.selected
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({selected: nextProps.selected})
  }

  render() {
      const {selectedCabin, selected} = this.state;
    return (
      <View style={styles.buttonContainer}>
        <Text>{this.props.label}</Text>
        <TouchableOpacity style={styles.circle}
          onPress={() => this.props.onSelect()} 
        >
          {selected && <View style={styles.checkedCircle} />} 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#ee7621",
  },
});

export default RadioButton;
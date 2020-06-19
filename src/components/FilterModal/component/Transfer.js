import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
//import { setDepartureDate, setReturnDate} from "../../../actions/passengerAction";
import { CheckBox } from "react-native-elements";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  
  render() {
    const {  } = this.state;

    return (
      <View style={styles.container}>
        {this.props.selectedWay == 0 ? (
          <View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>GİDİŞ</Text>
            </View>
            <View>
              /////
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>GİDİŞ</Text>
            </View>
            <View>
              ///
            </View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>DÖNÜŞ</Text>
            </View>
            <View>
              ///
            </View>
          </View>
        )}
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
    sortValue: state.passenger.sortValue,
  };
};

export default connect(mapStateToProps)(Transfer);

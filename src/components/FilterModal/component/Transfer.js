import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { connect } from "react-redux";
//import { setDepartureDate, setReturnDate} from "../../../actions/passengerAction";
import { CheckBox } from "react-native-elements";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segments: this.props.segments,
      segmentsCheckList: this.props.segmentsCheckList,
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderOption = ({ item, index }) => (
    <View>
      <CheckBox
        title={
          item == 0 ? "Direkt" : item == 1 ? `${item} Aktarma` : `${item + 1}`
        }
        checked={this.state.segmentsCheckList[index]}
        onPress={() => {
          this.state.segmentsCheckList[index] = !this.state.segmentsCheckList[
            index
          ];
          console.log("burda");
          console.log(this.state.segmentsCheckList);
          this.setState({
            segmentsCheckList: this.state.segmentsCheckList,
          });
        }}
      />
    </View>
  );

  componentWillReceiveProps(nextProps) {
    console.log("değişti");
    console.log(nextProps.segmentsCheckList);
  }

  render() {
    const {} = this.state;

    return (
      <View style={styles.container}>
        {this.props.selectedWay == 0 ? (
          <View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>GİDİŞ</Text>
            </View>
            <View>
              <FlatList
                data={this.state.segments}
                keyExtractor={(item) => item}
                renderItem={(item, index) => this.renderOption(item, index)}
              />
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>GİDİŞ</Text>
            </View>
            <View>
              <FlatList
                data={this.state.segments}
                keyExtractor={(item) => item}
                renderItem={(item, index) => this.renderOption(item, index)}
              />
            </View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>DÖNÜŞ</Text>
            </View>
            <View>
              <FlatList
                data={this.state.segments}
                keyExtractor={(item) => item}
                renderItem={(item, index) => this.renderOption(item, index)}
              />
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

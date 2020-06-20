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
      returnSegments: this.props.returnSegments,
      returnSegmentsCheckList: this.props.returnSegmentsCheckList
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
  renderOptionReturn = ({ item, index }) => (
    <View>
      <CheckBox
        title={
          item == 0 ? "Direkt" : item == 1 ? `${item} Aktarma` : `${item + 1} Aktarma`
        }
        checked={this.state.returnSegmentsCheckList[index]}
        onPress={() => {
          this.state.returnSegmentsCheckList[index] = !this.state.returnSegmentsCheckList[
            index
          ];
          console.log("burda");
          console.log(this.state.returnSegmentsCheckList);
          this.setState({
            returnSegmentsCheckList: this.state.returnSegmentsCheckList,
          });
        }}
      />
    </View>
  );

  componentWillReceiveProps(nextProps) {
    console.log("TRANSFER WILL RECEIVE PROPS WORKING");
    console.log(nextProps.segmentsCheckList);
    console.log(nextProps.returnSegmentsCheckList);
  }

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
                data={this.state.segments}
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
                data={this.state.returnSegments}
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
    sortValue: state.passenger.sortValue,
  };
};

export default connect(mapStateToProps)(Transfer);

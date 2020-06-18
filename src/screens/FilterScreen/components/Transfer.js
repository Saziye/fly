import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { connect } from "react-redux";
import { Logs } from "expo";
//import { setDepartureDate, setReturnDate} from "../../../actions/passengerAction";

const segments = [
  { label: "Direkt", value: "0" },
  { label: "1 Aktarma", value: "1" },
  { label: "2 Aktarma", value: "2" },
];

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depSelectedSegments: [],
      retSelectedSegments: [],
    };
  }
  onDepSelectionsChange = (depSelectedSegments) => {
    this.setState({ depSelectedSegments });
    setTimeout(()=> {
      console.log("GİDİŞ AKTARMA ARRAY");
    console.log(this.state.depSelectedSegments);
    
    },1000) 
    
  };

  onRetSelectionsChange = (retSelectedSegments) => {
    
    this.setState({ retSelectedSegments });
    setTimeout(()=> {
      console.log("GİDİŞ AKTARMA ARRAY");
      console.log(this.state.retSelectedSegments);
    },1000) 
    
  };

  render() {
    const { depSelectedSegments, retSelectedSegments } = this.state;

    return (
      <View style={styles.container}>
        {this.props.selectedWay == 0 ? (
          <View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>GİDİŞ</Text>
            </View>
            <View>
              <SelectMultiple
                items={segments}
                selectedItems={depSelectedSegments}
                onSelectionsChange={this.onDepSelectionsChange}
                //selectedCheckboxSource= {{color: '#ffc501'}}
                //selectedCheckboxStyle= {{color: '#ffc501'}}
              />
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>GİDİŞ</Text>
            </View>
            <View>
              <SelectMultiple
                items={segments}
                selectedItems={depSelectedSegments}
                onSelectionsChange={this.onDepSelectionsChange}
                //selectedCheckboxSource= {{color: '#ffc501'}}
                //selectedCheckboxStyle= {{color: '#ffc501'}}
              />
            </View>
            <View style={styles.container_one}>
              <Text style={styles.textStyle}>DÖNÜŞ</Text>
            </View>
            <View>
              <SelectMultiple
                items={segments}
                selectedItems={retSelectedSegments}
                onSelectionsChange={this.onRetSelectionsChange}
                //selectedCheckboxStyle= {{color: '#ffc501'}}
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

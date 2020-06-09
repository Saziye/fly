import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
  AndroidToast
} from "react-native";
import CabinItem from "./CabinItem";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//import for redux
import { connect } from "react-redux";
import { setPassengers } from "../../../actions/passengerAction";

class CabinRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengerArrayLabels: ['Yetişkin', 'Çocuk', 'Bebek', 'Yaşlı', 'Öğrenci'],
      rowLabel: '',
      passenger: props.passengers.passengers
    };
  };
  navigateFunction = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  labelPassenger(a) {
    let myKeys = Object.keys(a);
    let myValues = Object.values(a);
    let rowLabel= '';
    myKeys. forEach((element, index) => {
      if(parseInt(myValues[index]) != 0) {
        if(parseInt(index) != 4)
          rowLabel = rowLabel + myValues[index] + ' ' + this.state.passengerArrayLabels[index]  + ', ';
        else 
          rowLabel = rowLabel + myValues[index] + ' ' + this.state.passengerArrayLabels[index];

      }
      
    });
    this.setState({rowLabel});
  }

  componentWillReceiveProps(nextProps) {
    this.labelPassenger(nextProps.passengers.passengers);
  }

  componentDidMount() {
    this.labelPassenger(this.props.passengers.passengers);
  }

  render() {
    const {} = this.state;
    return (
      <View style={styles.container}>
        <CabinItem
          icon={<MaterialIcons name="person" size={30} color="white" />}
          count={this.state.rowLabel}
          click={() => this.navigateFunction("Passenger")}
        />
         <CabinItem
          icon={<MaterialIcons name="person" size={30} color="white" />}
          title={"Bussiness"}
          //click={}
        />
        <CabinItem
          icon={<MaterialIcons name="person" size={30} color="white" />}
          title={"Direkt Uçuşlar"}
          //click={}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 8,
    width: "100%",
    paddingHorizontal: 25,
    // borderColor: 'yellow',
    // borderWidth: 2
  },
});

const mapStateToProps = (state) => {
  return {
    passengers: state.passenger
  };
};


export default connect(mapStateToProps)(CabinRow);
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TouchableOpacityBase,
} from "react-native";
import FlyGroup from "./FlyItem";
import { getFlights, queryBuilder } from "../../../services/amadeusService";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/tr";
import FlyItem from "./FlyItem";

class FlyItemList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        flyObj: [],
        flyObjData: [],
        originalFlights: [],
        sortValue: 0,
        queryUrl: '',
      };
    }

    keyExtractor = (item, index) => index.toString();

    flytItem = ({ item, second }) => (
        <View>
          <FlyItem
          />
        </View>
    );
  
    render() {
      const { flyObjData, flyObj } = this.state;
  
      return (
        // <ScrollView>
        //   <FlatList
        //     // showsHorizontalScrollIndicator={false}
        //     data={flyObjData}
        //     keyExtractor={this.keyExtractor}
        //     renderItem={this.flytItem}
        //   />
        // </ScrollView>
        <FlyItem/>
      );
    }
  }
  
  const styles = StyleSheet.create({});
  
//   const mapStateToProps = (state) => {
//     return {
//       store: state.passenger,
//       departureDate: state.passenger.departureDate,
//       returnDate: state.passenger.returnDate,
//       originAirport: state.passenger.originAirport,
//       destinationAirport: state.passenger.destinationAirport,
//       cabinClass: state.passenger.cabinClass,
//       adults: state.passenger.passengers.adult,
//       children: state.passenger.passengers.child,
//       infant: state.passenger.passengers.infant,
//       selectedWay: state.passenger.selectedWay,
//     };
//   };
  
//   export default connect(mapStateToProps)(FlyItemList);
  
export default FlyItemList;
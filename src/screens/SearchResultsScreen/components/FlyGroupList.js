import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  Button
} from "react-native";
import FlyGroup from "./FlyGroup";
import { getFlights, queryBuilder } from "../../../services/amadeusService";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/tr";
import FlyItem from "./FlyItem";

class FlyGroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flyObj: this.props.flyObj,
      flyObjData: this.props.flyObjData,
      originalFlights: this.props.originalFlights,
      queryUrl: this.props.queryUrl,
      infoModalVisible: false,
      infoModalItem: []
    };
  }

  sortFly(value){
    switch (value) {
      case '0':
        console.log("sortPrice");
        this.sortPrice();
        break;
      case '1':
        this.sortDepartureTime();
        console.log("sortDeparture");
        break;
      case '2':
        this.sortArriveTime();
        console.log("sortArrive");
        break;
      case '3':
        this.sortCarrierName();
        console.log("sortCarrier");
        break;
      default: this.sortPrice();
      
    } 
  }


  componentDidMount() {
    this.sortFly(this.props.sortValue);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.sortValue != nextProps.sortValue){
      console.log("DENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE===============================================");
      console.log(nextProps.sortValue);
      this.sortFly(nextProps.sortValue);
      //this.setState({ flyObjData: nextProps.flyObjData });
    }else {
      this.setState({ flyObjData: nextProps.flyObjData });
      this.setState({ flyObj: nextProps.flyObj });
      this.setState({ originAirport: nextProps.originAirport });
      console.log("FLY GROUP WILL RECEIVE PROPS");
    }
  }

  sortPrice = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return a.price.total < b.price.total ? 1 : -1;
    });
    this.setState({ flyObjData: myData });
    console.log("PRICE SIRALANDI");
  };

  sortDepartureTime = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return moment(a.itineraries[0].segments[0].departure.at).format() >
        moment(b.itineraries[0].segments[0].departure.at).format()
        ? 1
        : -1;
    });
    this.setState({ flyObjData: myData });
    console.log("DEPARTURE SIRALANDI");
  };

  sortArriveTime = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return moment(
        a.itineraries[0].segments[a.itineraries[0].segments.length - 1].arrival
          .at
      ).format() >
        moment(
          b.itineraries[0].segments[b.itineraries[0].segments.length - 1]
            .arrival.at
        ).format()
        ? 1
        : -1;
    });
    this.setState({ flyObjData: myData });
    console.log("ARIIVE SIRALANDI");
  };

  sortCarrierName = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return a.itineraries[0].segments[0].carrierCode.toLowerCase() >
        b.itineraries[0].segments[0].carrierCode.toLowerCase()
        ? 1
        : -1;
    });
    this.setState({ flyObjData: myData });
    console.log("CARRIER SIRALANDI");
  };

  keyExtractor = (item, index) => index.toString();

  openModal(data) {
    this.props.openModal(data)
  }
  
  flytItem = ({ item, second }) => (
    <TouchableOpacity
      onPress={() => {
        this.openModal(item);
      }}
    >
      {this.props.selectedWay == 1 ? (
       
        <FlyGroup  
          dCarrierName={  this.state.flyObj.dictionaries.carriers[
            item.validatingAirlineCodes[0]
          ]
            .toLowerCase()
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ") }
          dCarrierCode={
            item.itineraries[0].segments[0].carrierCode +
            item.itineraries[0].segments[0].number
          }
          dCabin={item.travelerPricings[0].fareDetailsBySegment[0].cabin}
          dDepartureTime={moment(
            item.itineraries[0].segments[0].departure.at
          ).format("LT")}
          dOriginAirport={item.itineraries[0].segments[0].departure.iataCode}
          dArriveTime={moment(
            item.itineraries[0].segments[
              item.itineraries[0].segments.length - 1
            ].arrival.at
          ).format("LT")}
          dDestinationAirport={
            item.itineraries[0].segments[
              item.itineraries[0].segments.length - 1
            ].arrival.iataCode
          }
          dSegment={item.itineraries[0].segments.length - 1}
          dHour={
            moment.duration(item.itineraries[0].duration)._data.hours + " sa " +moment.duration(item.itineraries[0].duration)._data.minutes+" dk " 
          }
          rCarrierName={this.state.flyObj.dictionaries.carriers[
            item.validatingAirlineCodes
          ]
            .toLowerCase()
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
          rCarrierCode={
            item.itineraries[1].segments[0].carrierCode +
            item.itineraries[1].segments[0].number
          }
          rCabin={item.travelerPricings[0].fareDetailsBySegment[0].cabin}
          rDepartureTime={moment(
            item.itineraries[1].segments[0].departure.at
          ).format("LT")}
          rOriginAirport={item.itineraries[1].segments[0].departure.iataCode}
          rArriveTime={moment(
            item.itineraries[1].segments[
              item.itineraries[1].segments.length - 1
            ].arrival.at
          ).format("LT")}
          rDestinationAirport={
            item.itineraries[1].segments[
              item.itineraries[1].segments.length - 1
            ].arrival.iataCode
          }
          rSegment={item.itineraries[1].segments.length - 1}
          rHour={
            moment.duration(item.itineraries[1].duration)._data.hours + " sa " +moment.duration(item.itineraries[1].duration)._data.minutes+" dk " 
          }
          price={item.price.total}
          dday={
            moment(
              item.itineraries[0].segments[
                item.itineraries[0].segments.length - 1
              ].arrival.at
            ).format("D") ==
            moment(item.itineraries[0].segments[0].departure.at).format("D")
          }
          rday={
            moment(
              item.itineraries[1].segments[
                item.itineraries[1].segments.length - 1
              ].arrival.at
            ).format("D") ==
            moment(item.itineraries[1].segments[0].departure.at).format("D")
          }
          ricon={item.validatingAirlineCodes}
          dicon={item.validatingAirlineCodes}
          flyObjData={this.state.flyObjData}
        />
      ) : (
        <FlyItem
          carrierName={this.state.flyObj.dictionaries.carriers[
            item.validatingAirlineCodes[0]
          ]
            .toLowerCase()
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
          carrierCode={
            item.itineraries[0].segments[0].carrierCode +
            item.itineraries[0].segments[0].number
          }
          cabin={item.travelerPricings[0].fareDetailsBySegment[0].cabin}
          departureTime={moment(
            item.itineraries[0].segments[0].departure.at
          ).format("LT")}
          originAirport={item.itineraries[0].segments[0].departure.iataCode}
          arriveTime={moment(
            item.itineraries[0].segments[
              item.itineraries[0].segments.length - 1
            ].arrival.at
          ).format("LT")}
          destinationAirport={
            item.itineraries[0].segments[
              item.itineraries[0].segments.length - 1
            ].arrival.iataCode
          }
          segment={item.itineraries[0].segments.length - 1}
          hour={
            moment.duration(item.itineraries[0].duration)._data.hours + " sa " +moment.duration(item.itineraries[0].duration)._data.minutes+" dk " 
          }
          price={item.price.total}
          day={
            moment(
              item.itineraries[0].segments[
                item.itineraries[0].segments.length - 1
              ].arrival.at
            ).format("D") ==
            moment(item.itineraries[0].segments[0].departure.at).format("D")
          }
          icon={item.validatingAirlineCodes}
        />
      )}
    </TouchableOpacity>
  );

  render() {
    const { flyObjData, flyObj } = this.state;

    return (
      <ScrollView>
        <FlatList
          // showsHorizontalScrollIndicator={false}
          data={flyObjData}
          keyExtractor={this.keyExtractor}
          renderItem={this.flytItem}
         
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    store: state.passenger,
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    originAirport: state.passenger.originAirport,
    destinationAirport: state.passenger.destinationAirport,
    cabinClass: state.passenger.cabinClass,
    adults: state.passenger.passengers.adult,
    children: state.passenger.passengers.child,
    infant: state.passenger.passengers.infant,
    selectedWay: state.passenger.selectedWay,
    sortValue: state.passenger.sortValue,
  };
};

export default connect(mapStateToProps)(FlyGroupList);

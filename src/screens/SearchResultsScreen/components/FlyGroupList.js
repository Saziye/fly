import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity,FlatList,
  ScrollView } from "react-native";
import FlyGroup from "./FlyGroup";
import { getFlights } from "../../../services/amadeusService";
import { connect } from "react-redux";
import {
  setDepartureDate,
  setReturnDate,
  setSelectedWay,
} from "../../../actions/passengerAction";
import moment from 'moment';
import 'moment/locale/tr'

class FlyGroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flyObj: [],
      flyObjData: [],
    };
  }

  componentDidMount() {
    console.log("Store object");
    console.log(this.props.store);
    getFlights(this.props.originAirport.AirportCode,this.props.destinationAirport.AirportCode, this.props.departureDate, this.props.returnDate).then((response)=> {
    //  console.log(response.data);
     this.setState({flyObj: response.data});
     console.log(response.data.dictionaries.carriers)
    this.setState({flyObjData: response.data.data});
    }).catch((err)=> {
        console.log(err.response.request._response);
    }); 

  }

  keyExtractor = (item, index) => index.toString();

  flytItem = ({ item, second }) => (
    <TouchableOpacity>
      <View>
        <FlyGroup
        dCarrierName={this.state.flyObj.dictionaries.carriers[item.validatingAirlineCodes].toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}
        dCarrierCode={item.itineraries[0].segments[0].carrierCode +item.itineraries[0].segments[0].number}
        dCabin={item.travelerPricings[0].fareDetailsBySegment[0].cabin}
        dDepartureTime={moment(item.itineraries[0].segments[0].departure.at).format('LT')}
        dOriginAirport={item.itineraries[0].segments[0].departure.iataCode}
        dArriveTime={moment(item.itineraries[0].segments[item.itineraries[0].segments.length-1].arrival.at).format('LT')}
        dDestinationAirport={item.itineraries[0].segments[item.itineraries[0].segments.length-1].arrival.iataCode}
        dSegment={item.itineraries[0].segments.length - 1}
        dHour={moment(item.itineraries[0].segments[item.itineraries[0].segments.length - 1].arrival.at).diff(moment(item.itineraries[0].segments[0].departure.at),"hour") +" sa " + moment.utc(moment(item.itineraries[0].segments[item.itineraries[0].segments.length - 1].arrival.at, "HH:mm:ss").diff(moment(item.itineraries[0].segments[0].departure.at),"HH:mm:ss") ).format("mm")+" dk"}
        rCarrierName={this.state.flyObj.dictionaries.carriers[item.validatingAirlineCodes].toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}
        rCarrierCode={item.itineraries[1].segments[0].carrierCode +item.itineraries[1].segments[0].number}
        rCabin={item.travelerPricings[1].fareDetailsBySegment[0].cabin}
        rDepartureTime={moment(item.itineraries[1].segments[0].departure.at).format('LT')}
        rOriginAirport={item.itineraries[1].segments[0].departure.iataCode}
        rArriveTime={moment(item.itineraries[1].segments[item.itineraries[1].segments.length-1].arrival.at).format('LT')}
        rDestinationAirport={item.itineraries[1].segments[item.itineraries[1].segments.length-1].arrival.iataCode}
        rSegment={item.itineraries[1].segments.length - 1}
        rHour={moment(item.itineraries[1].segments[item.itineraries[1].segments.length - 1].arrival.at).diff(moment(item.itineraries[1].segments[0].departure.at),"hour") +" sa " + moment.utc(moment(item.itineraries[1].segments[item.itineraries[1].segments.length - 1].arrival.at, "HH:mm:ss").diff(moment(item.itineraries[1].segments[0].departure.at),"HH:mm:ss") ).format("mm")+" dk"}
        price={item.price.total}
        dday= {moment(item.itineraries[0].segments[item.itineraries[0].segments.length-1].arrival.at).format('D') == (moment(item.itineraries[0].segments[0].departure.at).format('D'))}
        rday = {moment(item.itineraries[1].segments[item.itineraries[1].segments.length-1].arrival.at).format('D') == (moment(item.itineraries[1].segments[0].departure.at).format('D'))}
        /> 
      </View>
    </TouchableOpacity>
  );

  render() {
    const {flyObjData, flyObj } = this.state;

    return (

      <ScrollView>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={flyObjData}
            keyExtractor={this.keyExtractor}
            renderItem={this.flytItem}
            extraData={flyObj.dictionaries}
          />
        </ScrollView>
        
      
    );
  }
}

const styles = StyleSheet.create({
  
});

const mapStateToProps = (state) => {
  return {
    store: state.passenger,
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    originAirport: state.passenger.originAirport,
    destinationAirport: state.passenger.destinationAirport,

    selectedWay: state.passenger.selectedWay,
  };
};


export default connect(mapStateToProps)(FlyGroupList);


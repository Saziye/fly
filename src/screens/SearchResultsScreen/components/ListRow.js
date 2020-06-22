import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity,FlatList,
  ScrollView } from "react-native";
import ListItem from "./ListItem";
import { getFlights } from "../../../services/amadeusService";
import { connect } from "react-redux";
import {
  setDepartureDate,
  setReturnDate,
  setSelectedWay,
} from "../../../actions/passengerAction";

class ListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flyObj: [],
      flyObjData: [],
    };
  }

  componentDidMount() {
    
    getFlights("IST", "ESB", "2020-06-16", "2020-06-19").then((response)=> {
     console.log(response.data);
     this.setState({flyObj: response.data});
    this.setState({flyObjData: response.data.data});
    }); 

  }

  keyExtractor = (item, index) => index.toString();

  flytItem = ({ item }) => (
    <TouchableOpacity>
      <View style={{alignItems:'center'}} >
        <View style={styles.container_one}>
        <ListItem
          carrierName={item.validatingAirlineCodes}
          carrierCode={"PC2092"}
          cabin={"Ekonomi"}
          //departureTime={item.itineraries[0].segments[item.itineraries[0].segments.length-1].departure.at}
          originAirport={item.itineraries[0].segments[0].departure.iataCode}
         // arriveTime={item.itineraries[0].segments[item.itineraries[0].segments.length-1].arrival.at}
          destinationAirport={"ADA"}
          //segment={item.segments.length()}
          hour={"1 sa 25 dk"}
        /> 
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {flyObjData} = this.state;

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

const styles = StyleSheet.create({
  container_one: {
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    padding:5
  },
  
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


export default connect(mapStateToProps)(ListRow);


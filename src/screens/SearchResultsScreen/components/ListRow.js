import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity,FlatList,
  ScrollView } from "react-native";
import ListItem from "./ListItem";
import { getFlights } from "../../../services/amadeusService";

class ListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: []
    };
  }

  componentDidMount() {
    getFlights("SYD", "BKK", "2020-09-01", "2020-09-05").then((response)=> {
     console.log(response.data);
     this.setState({searchList: response.data});
    }); 
  }

  keyExtractor = (item, index) => index.toString();

  flytItem = ({ item }) => (
    <TouchableOpacity>
      <View style={{alignItems:'center'}} >
        <View style={styles.container_one}>
        <ListItem
          carrierName={"Pegasus"}
          carrierCode={"PC2092"}
          cabin={"Ekonomi"}
          departureTime={"17:25"}
          originAirport={"SAW"}
          arriveTime={"18:50"}
          destinationAirport={"ADA"}
          segment={"Direkt"}
          hour={"1 sa 25 dk"}
        /> 
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {searchList} = this.state;

    return (

      <ScrollView>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={searchList}
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

export default ListRow;

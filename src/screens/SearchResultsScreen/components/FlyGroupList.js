import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TouchableOpacityBase,
  ActivityIndicator,
} from "react-native";
import FlyGroup from "./FlyGroup";
import { getFlights, queryBuilder } from "../../../services/amadeusService";
import { connect } from "react-redux";
import {
  setDepartureDate,
  setReturnDate,
  setSelectedWay,
} from "../../../actions/passengerAction";
import moment from "moment";
import "moment/locale/tr";
import FlyItem from "./FlyItem";

class FlyGroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flyObj: [],
      flyObjData: [],
      originalFlights: [],
      sortValue: 0,
      queryUrl: "",
    };
  }

  componentDidMount() {
    this.recieveFlights(
      this.props.originAirport.AirportCode,
      this.props.destinationAirport.AirportCode,
      this.props.departureDate,
      this.props.returnDate,
      this.props.adults,
      this.props.children,
      this.props.infant,
      this.props.cabinClass
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.sortValue !== this.props.sortValue) {
      this.setState({ sortValue: nextProps.sortValue });
      // console.log(this.state.sortValue);
    }
    console.log("NEXT PROPS ?=>     ");
    // console.log(nextProps);
    this.setState({ flyObjData: [] });
    this.recieveFlights(
      nextProps.originAirport.AirportCode,
      nextProps.destinationAirport.AirportCode,
      nextProps.departureDate,
      nextProps.returnDate,
      nextProps.adults,
      nextProps.children,
      nextProps.infant,
      nextProps.cabinClass
    );
  }

  recieveFlights(
    originAirportCode,
    destinationAirportCode,
    departureDate,
    returnDate,
    adults,
    children,
    infant,
    cabinClass
  ) {
    console.log("Store object");
    console.log(this.props.store);
    var query = queryBuilder(
      originAirportCode,
      destinationAirportCode,
      departureDate,
      returnDate,
      adults,
      children,
      infant,
      cabinClass
    ).toString();
    this.setState({ queryUrl: query });
    setTimeout(() => {
      console.log("Lütfen Çalış");
      console.log(query);
    }, 1);

    getFlights(query)
      .then((response) => {
        this.setState({ flyObj: response.data });
        this.setState({ originalFlights: response.data.data });
        if (this.state.sortValue == 1) {
          this.sortDepartureTime();
          console.log("sortDeparture");
        } else if (this.state.sortValue == 2) {
          this.sortArriveTime();
          console.log("sortArrive");
        } else if (this.state.sortValue == 3) this.sortCarrierName();
        else {
          this.sortPrice();
          console.log("sortPrice");
        }
      })
      .catch((err) => {
        console.log(err.response.request._response);
      });
  }

  sortPrice = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return a.price.total > b.price.total ? 1 : -1;
    });
    this.setState({ flyObjData: myData });
  };

  sortDepartureTime = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return moment(a.itineraries[0].segments[0].departure.at).format("LT") >
        moment(b.itineraries[0].segments[0].departure.at).format("LT")
        ? 1
        : -1;
    });
    this.setState({ flyObjData: myData });
  };

  sortArriveTime = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return moment(
        a.itineraries[0].segments[a.itineraries[0].segments.length - 1].arrival
          .at
      ).format("LT") >
        moment(
          b.itineraries[0].segments[b.itineraries[0].segments.length - 1]
            .arrival.at
        ).format("LT")
        ? 1
        : -1;
    });
    this.setState({ flyObjData: myData });
  };

  sortCarrierName = () => {
    const myData = this.state.originalFlights.sort(function (a, b) {
      return a.itineraries[0].segments[0].carrierCode.toLowerCase() >
        b.itineraries[0].segments[0].carrierCode.toLowerCase()
        ? 1
        : -1;
    });
    this.setState({ flyObjData: myData });
  };

  keyExtractor = (item, index) => index.toString();

  flytItem = ({ item, second }) => (
    <TouchableOpacity>
      <View>
        {this.props.selectedWay == 1 ? (
          <FlyGroup
            dCarrierName={this.state.flyObj.dictionaries.carriers[
              item.validatingAirlineCodes
            ]
              .toLowerCase()
              .split(" ")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
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
              moment(
                item.itineraries[0].segments[
                  item.itineraries[0].segments.length - 1
                ].arrival.at
              ).diff(
                moment(item.itineraries[0].segments[0].departure.at),
                "hour"
              ) +
              " sa " +
              moment
                .utc(
                  moment(
                    item.itineraries[0].segments[
                      item.itineraries[0].segments.length - 1
                    ].arrival.at,
                    "HH:mm:ss"
                  ).diff(
                    moment(item.itineraries[0].segments[0].departure.at),
                    "HH:mm:ss"
                  )
                )
                .format("mm") +
              " dk"
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
              moment(
                item.itineraries[1].segments[
                  item.itineraries[1].segments.length - 1
                ].arrival.at
              ).diff(
                moment(item.itineraries[1].segments[0].departure.at),
                "hour"
              ) +
              " sa " +
              moment
                .utc(
                  moment(
                    item.itineraries[1].segments[
                      item.itineraries[1].segments.length - 1
                    ].arrival.at,
                    "HH:mm:ss"
                  ).diff(
                    moment(item.itineraries[1].segments[0].departure.at),
                    "HH:mm:ss"
                  )
                )
                .format("mm") +
              " dk"
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
          />
        ) : (
          <FlyItem
            carrierName={this.state.flyObj.dictionaries.carriers[
              item.validatingAirlineCodes
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
              moment(
                item.itineraries[0].segments[
                  item.itineraries[0].segments.length - 1
                ].arrival.at
              ).diff(
                moment(item.itineraries[0].segments[0].departure.at),
                "hour"
              ) +
              " sa " +
              moment
                .utc(
                  moment(
                    item.itineraries[0].segments[
                      item.itineraries[0].segments.length - 1
                    ].arrival.at,
                    "HH:mm:ss"
                  ).diff(
                    moment(item.itineraries[0].segments[0].departure.at),
                    "HH:mm:ss"
                  )
                )
                .format("mm") +
              " dk"
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
      </View>
    </TouchableOpacity>
  );

  render() {
    const { flyObjData, flyObj } = this.state;

    return (
      <ScrollView>
        {flyObjData.length == 0 ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={flyObjData}
            keyExtractor={this.keyExtractor}
            renderItem={this.flytItem}
            extraData={flyObj.dictionaries}
          />
        )}
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
  };
};

export default connect(mapStateToProps)(FlyGroupList);

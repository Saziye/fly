import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Button } from "react-native";
import DateItem from "./DateItem";
import { connect } from "react-redux";
import {
  setDepartureDate,
  setReturnDate,
} from "../../../actions/passengerAction";

class DateRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: 1,
      today: "",
      minReturnDate: "",
      months: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ],
      selectedWay: props.A,
    };
  }
  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      this.setState({selectedWay: nextProps.A})
  }
  componentDidMount() {
    const date = new Date();
    const today =
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      date.getFullYear();
    this.setState({ today: today });
    this.setState({ minReturnDate: today });
    this.props.setDepartureDate(today);
    //this.props.setReturnDate(today);
  }

  chooseDate(type) {
    this.setState({ dateType: type });
    setTimeout(() => {
      this._date.onPressDate();
    }, 100);
  }

  render() {
    const { selectedWay } = this.state;
    return (

      <View style={styles.container_two}>
        <DateItem
          title={"Gidiş Tarihi"}
          date={"05"}
          mounth={"HAZ"}
          year={"2020"}
          day={"Cuma"}
          //click={}
        />
        {selectedWay === 1 ? (
          <DateItem
            title={"Gidiş Tarihi"}
            date={"+"}
            mounth={"DÖNÜŞ EKLE"}
          />
        ) : (
          <DateItem
            title={"Gidiş Tarihi"}
            date={"05"}
            mounth={"HAZ"}
            year={"2020"}
            day={"Cuma"}
            //click={}
          />
        )}
        {/* <Button onPress={() => {
            console.log('DEĞİŞİM')
            console.log(this.state.selectedWay);
            console.log(this.props.A)
        }} title='DENE' /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_two: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
    // marginHorizontal: '10%',
    // height: '40%',
    width: "100%",
    // borderColor: 'red',
    // borderWidth: 2
  },
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    A: state.passenger.selectedWay
  };
};

const mapDispatchToProps = () => {
  return {
    setDepartureDate,
    setReturnDate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(DateRow);

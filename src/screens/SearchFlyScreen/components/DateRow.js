import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import DateItem from "./DateItem";
import { connect } from "react-redux";
import {
  setDepartureDate,
  setReturnDate,
} from "../../../actions/passengerAction";
import DatePicker from "react-native-datepicker";
import moment from "moment";

class DateRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: 0,
      today: "",
      minReturnDate: "",
      months: [
        "OCA",
        "ŞUB",
        "MAR",
        "NİS",
        "MAY",
        "HAZ",
        "TEM",
        "AĞU",
        "EYL",
        "EKİ",
        "KAS",
        "ARA",
      ],
      days: [
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Preşembe",
        "Cuma",
        "Cumartesi",
        "Pazar",
      ],
      selectedWay: props.A,
      // day: "",
    };
  }

  getDayFunction() {
    let myDate;
    if (this.state.dateType === 0) {
      myDate = this.state.today;
    } else {
      myDate = this.props.returnDate;
    }
    let day = myDate.substring(0, 2);
    let month = myDate.substring(3, 5);
    let year = myDate.substring(6);
    let myNewDate = new Date(month + "/" + day + "/" + year);
    this.setState({ day: this.state.days[myNewDate.getDay() - 1] });
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ selectedWay: nextProps.A });
    // let myDate = nextProps.departureDate;
    // let day = myDate.substring(0, 2);
    // let month = myDate.substring(3, 5);
    // let year = myDate.substring(6);
    // let myNewDate = new Date(month + "/" + day + "/" + year);
    // this.setState({ day: this.state.days[myNewDate.getDay() - 1] });
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
    //console.log(typeof(moment(this.props.departureDate)))
  }

  chooseDate(type) {
    this.setState({ dateType: type });
    setTimeout(() => {
      this._date.onPressDate();
    }, 100);
  }

  onDatePressFunction = (date) => {
    const { dateType } = this.state;
    if (dateType === 1) {
      this.props.setDepartureDate(date);
      this.setState({ minReturnDate: date });
    } else {
      this.props.setReturnDate(date);
      this.setState({ selectedIndex: 1 });
    }
  };

  render() {
    const { selectedWay } = this.state;
    return (
      <View style={styles.container_two}>
        <DateItem
          title={"Gidiş Tarihi"}
          date={this.props.departureDate.substring(0, 2)}
          mounth={
            this.state.months[
              parseInt(this.props.departureDate.substring(3, 5)) - 1
            ]
          }
          year={this.props.departureDate.substring(6, 10)}
          day={this.state.days[
            parseInt(
             ( new Date(
                this.props.departureDate.substring(3, 5) +
                  "/" +
                  this.props.departureDate.substring(0, 2) +
                  "/" +
                  this.props.departureDate.substring(6)
              ).getDay() -1) <0 ? 6 : ( new Date(
                this.props.departureDate.substring(3, 5) +
                  "/" +
                  this.props.departureDate.substring(0, 2) +
                  "/" +
                  this.props.departureDate.substring(6)
              ).getDay() -1)
            )
          ]}
          click={() => this.chooseDate(1)}
        />
        {selectedWay === 0 ? (
          <DateItem title={"Gidiş Tarihi"} date={"+"} mounth={"DÖNÜŞ EKLE"} />
        ) : (
          <DateItem
            title={"Gidiş Tarihi"}
            date={this.props.returnDate.substring(0, 2)}
            mounth={
              this.state.months[
                parseInt(this.props.returnDate.substring(3, 5)) - 1
              ]
            }
            year={this.props.returnDate.substring(6, 10)}
            day={
              this.state.days[
                parseInt(
                  (new Date(
                    this.props.returnDate.substring(3, 5) +
                      "/" +
                      this.props.returnDate.substring(0, 2) +
                      "/" +
                      this.props.returnDate.substring(6)
                  ).getDay() - 1 ) < 0 ? 6 : (new Date(
                    this.props.returnDate.substring(3, 5) +
                      "/" +
                      this.props.returnDate.substring(0, 2) +
                      "/" +
                      this.props.returnDate.substring(6)
                  ).getDay() - 1 )
                )
              ]
            }
            click={() => this.chooseDate(2)}
          />
        )}
        {/* <Button onPress={() => {
            console.log('DEĞİŞİM')
            console.log(this.state.selectedWay);
            console.log(this.props.A)
        }} title='DENE' /> */}

        <DatePicker
          date={
            this.state.dateType === 1
              ? this.props.departureDate
              : this.props.returnDate
          }
          mode="date"
          minDate={
            this.state.dateType === 1
              ? this.state.today
              : this.state.minReturnDate
          }
          //format={Moment().format('YYYY-MM-DD')}
          format="DD/MM/YYYY"
          showIcon={false}
          customStyles={{
            dateTouchBody: {
              display: "none",
            },
          }}
          onDateChange={(date) => {
            //   this.setState({ date: date });
            this.onDatePressFunction(date);
          }}
          ref={(d) => (this._date = d)}
        />
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
    borderColor: "red",
    borderWidth: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    A: state.passenger.selectedWay,
  };
};

const mapDispatchToProps = () => {
  return {
    setDepartureDate,
    setReturnDate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(DateRow);

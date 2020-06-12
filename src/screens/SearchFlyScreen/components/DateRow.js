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
  setSelectedWay,
} from "../../../actions/passengerAction";
import DatePicker from "react-native-datepicker";

class DateRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: 1,
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
        "Perşembe",
        "Cuma",
        "Cumartesi",
        "Pazar",
      ],
      selectedWay: props.selectedWay,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({selectedWay: nextProps.selectedWay});
  }

  componentDidMount() {
    const date = new Date();

    const today = date.getFullYear() + "-" + (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) + "-" + (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) ;
    //console.log("TODAY DATE:", today);
    this.setState({ today: today });
    this.setState({ minReturnDate: today });
    this.props.setDepartureDate(today);
    this.props.setReturnDate(today);
    //this.props.setReturnDate(today);
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
      this.props.setSelectedWay(1);
      this.setState({ selectedWay: 1 });
    }
  };

  render() {
    const { selectedWay } = this.state;
    return (
      <View style={styles.container_two}>
        <DateItem
          title={"Gidiş Tarihi"}
          date={this.props.departureDate.substring(8, 10)}
          mounth={
            this.state.months[
              parseInt(this.props.departureDate.substring(5, 7)) - 1
            ]
          }
          year={this.props.departureDate.substring(0, 4)}
          day={
            this.state.days[
              parseInt(
                new Date(
                  this.props.departureDate.substring(5, 7) +
                    "/" +
                    this.props.departureDate.substring(8, 10) +
                    "/" +
                    this.props.departureDate.substring(0,4)
                ).getDay() -
                  1 <
                  0
                  ? 6
                  : new Date(
                      this.props.departureDate.substring(5, 7) +
                        "/" +
                        this.props.departureDate.substring(8, 10) +
                        "/" +
                        this.props.departureDate.substring(0,4)
                    ).getDay() - 1
              )
            ]
          }
          click={() => this.chooseDate(1)}
        />
        {selectedWay === 1 ? (
          <DateItem
            title={"Dönüş Tarihi"}
            date={this.props.returnDate.substring(8, 10)}
            mounth={
              this.state.months[
                parseInt(this.props.returnDate.substring(5, 7)) - 1
              ]
            }
            year={this.props.returnDate.substring(0,4)}
            day={
              this.state.days[
                parseInt(
                  new Date(
                    this.props.returnDate.substring(3, 5) +
                      "/" +
                      this.props.returnDate.substring(0, 2) +
                      "/" +
                      this.props.returnDate.substring(6)
                  ).getDay() -
                    1 <
                    0
                    ? 6
                    : new Date(
                        this.props.returnDate.substring(5, 7) +
                          "/" +
                          this.props.returnDate.substring(8, 10) +
                          "/" +
                          this.props.returnDate.substring(0,4)
                      ).getDay() - 1
                )
              ]
            }
            click={() => this.chooseDate(2)}
          />
        ) : (
          <DateItem
            title={"Dönüş Tarihi"}
            date={"+"}
            mounth={"DÖNÜŞ EKLE"}
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
          // format="DD/MM/YYYY"
          format="YYYY/MM/DD"
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
    // borderColor: "red",
    // borderWidth: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    selectedWay: state.passenger.selectedWay,
  };
};

const mapDispatchToProps = () => {
  return {
    setDepartureDate,
    setReturnDate,
    setSelectedWay,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(DateRow);

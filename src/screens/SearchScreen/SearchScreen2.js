import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import SegmentedControlTab from "react-native-segmented-control-tab";

import { AntDesign } from "@expo/vector-icons";

import TextItem from "../../components/TextItem";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";
//for redux
import { connect } from "react-redux";
import { setDepartureDate, setReturnDate } from "../../actions/passengerAction";
import Modal from "react-native-modal";

import instance from "../../api";

const green = "#2dc44d";

const UserTypeRow = ({
  userType,
  userTypeDescription,
  userTypeAmount,
  increase,
  reduce,
}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 16,
      height: 60,
      alignItems: "center",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        height: 60,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          opacity: 0.7,
        }}
      >
        {userType}
      </Text>
      <Text
        style={{
          fontSize: 16,
          opacity: 0.3,
          marginLeft: 10
        }}
      >
        {userTypeDescription}
      </Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          opacity: 0.3,
          marginHorizontal: 10,
          marginTop: 2,
        }}
      >
        <AntDesign name="minuscircle" size={24} color={green} />
      </Text>
      <Text
        style={{
          fontSize: 20,
          opacity: 0.7,
        }}
      >
        0
      </Text>
      <Text
        style={{
          fontSize: 20,
          opacity: 0.9,
          marginHorizontal: 10,
          marginTop: 2,
        }}
      >
        <AntDesign name="pluscircle" size={24} color={green} />
      </Text>
    </View>
  </View>
);

class SearchScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      //departureDate: new Date().getDate(),
      //returnDate: '',
      gidis: false,
      dateType: 1,
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
      today: "",
      minReturnDate: "",
      defaultOrigin: {
        AirportCode: "IST",
        AirportName: "İstanbul Havalimanı",
        CityName: "Istanbul",
        CountryName: "Türkiye",
        IsCity: false,
      },
      defaultDestination: {
        AirportCode: "ESB",
        AirportName: "Esenboga",
        CityName: "Ankara",
        CountryName: "Türkiye",
        IsCity: false,
      },
      headerModalTab: 0,
    };
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

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  navigateFunction = (screen, type) => {
    const { navigation } = this.props;
    navigation.navigate(screen, { type: type });
    console.log("navigate");
  };

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

  chooseDate(type) {
    this.setState({ dateType: type });
    setTimeout(() => {
      this._date.onPressDate();
    }, 100);
  }

  render() {
    const { selectedIndex, defaultOrigin, defaultDestination } = this.state;
    //console.log(this.props.origin);
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/k.jpg")}
        >
          <View style={styles.overlay}>
            <View style={{ marginTop: 40 }}>
              <SegmentedControlTab
                tabsContainerStyle={styles.segment}
                values={["TEK GİDİŞ", "GİDİŞ DÖNÜŞ"]}
                selectedIndex={this.state.selectedIndex}
                onTabPress={this.handleIndexChange}
                borderRadius={5}
                activeTabStyle={styles.activeTabStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                tabTextStyle={styles.tabTextStyle}
                tabStyle={styles.tabStyle}
              />
            </View>
            <View style={styles.container_one}>
              <TextItem
                title={"Kalkış"}
                text={
                  this.props.origin.AirportCode == null
                    ? defaultOrigin.AirportCode
                    : this.props.origin.AirportCode
                }
                subtext={
                  this.props.origin.AirportName == null
                    ? defaultOrigin.AirportName
                    : this.props.origin.AirportName
                }
                click={() => this.navigateFunction("AirportsList", 0)}
              />
              <TouchableOpacity style={styles.iconContainer}>
                <FontAwesome5 name="exchange-alt" size={24} color="#3ca0cd" />
              </TouchableOpacity>
              <TextItem
                title={"Varış"}
                text={
                  this.props.destination.AirportCode == null
                    ? defaultDestination.AirportCode
                    : this.props.destination.AirportCode
                }
                subtext={
                  this.props.destination.AirportName == null
                    ? defaultDestination.AirportName
                    : this.props.destination.AirportName
                }
                click={() => this.navigateFunction("AirportsList", 1)}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.line}></View>
              <View style={styles.line}></View>
            </View>
            <View style={styles.container_two}>
              <TextItem
                title={"Kalkış"}
                text={this.props.departureDate.substring(0, 2)}
                subtext={
                  this.state.months[
                    parseInt(this.props.departureDate.substring(3, 5)) - 1
                  ]
                }
                click={() => this.chooseDate(1)}
              />
              <View style={styles.dateIcon}>
                <FontAwesome5 name="calendar-alt" size={26} color="#3ca0cd" />
              </View>
              {selectedIndex === 1 ? (
                <TextItem
                  title={"Varış"}
                  text={this.props.returnDate.substring(0, 2)}
                  subtext={
                    this.state.months[
                      parseInt(this.props.returnDate.substring(3, 5)) - 1
                    ]
                  }
                  click={() => this.chooseDate(2)}
                />
              ) : (
                <TextItem
                  title={"Varış"}
                  text={<Feather name="plus" size={50} color="#ee7621" />}
                  subtext={"Dönüş Ekle"}
                  click={() => this.chooseDate(2)}
                />
              )}

              {/* <TextItem title= {"Kalkış"} text = {"IST"} subtext={"Sabiha Gökçen"}/> */}
            </View>
            {/* <View style={styles.line2}></View> */}
            <TouchableOpacity>
              <View style={styles.container_three}>
                <FontAwesome5
                  name="user-plus"
                  size={22}
                  color="#3ca0cd"
                  style={styles.icon}
                />
                <Text style={styles.textYolcu}>1 yolcu- En uygun</Text>
              </View>
            </TouchableOpacity>
            <Modal
              testID={"modal"}
              isVisible={true}
              onSwipeComplete={this.close}
              swipeDirection={["up", "left", "right", "down"]}
              style={styles.modalView}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  height: "70%",
                  // width: "100%",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <View style={styles.modalHeader}>
                  <View
                    style={[
                      styles.modalHeaderButton,
                      this.state.headerModalTab == 0
                        ? { borderBottomWidth: 2, borderBottomColor: green }
                        : { borderBottomWidth: 0, borderBottomColor: "white" },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ headerModalTab: 0 });
                      }}
                    >
                      <Text>Tolcu Sayısı</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      styles.modalHeaderButton,
                      this.state.headerModalTab == 1
                        ? { borderBottomWidth: 2, borderBottomColor: green }
                        : { borderBottomWidth: 0, borderBottomColor: "white" },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ headerModalTab: 1 });
                        console.log("DENEEM");
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "500",
                          opacity: 0.5,
                        }}
                      >
                        Kabin Sınıfı
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <UserTypeRow userType={"Yetişkin"}></UserTypeRow>
                  <UserTypeRow
                    userType={"Çocuk"}
                    userTypeDescription={"(2 - 12 Yaş Arası)"}
                  ></UserTypeRow>
                  <UserTypeRow
                    userType={"Bebek"}
                    userTypeDescription={"(0 - 2 Yaş Arası)"}
                  ></UserTypeRow>
                  <UserTypeRow userType={"65 yaş üstü"}></UserTypeRow>
                  <UserTypeRow
                    userType={"Öğrenci"}
                    userTypeDescription={"(12 - 24 Yaş Arası)"}
                  ></UserTypeRow>
                </View>
                <View>
                  <View
                    style={{
                      // position: "absolute",
                      width: "95%",
                      justifyContent: "center",
                      alignContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Button
                      title="Tamam"
                      onPress={() => {
                        console.log(this.state.headerModalTab);
                      }}
                      buttonStyle={styles.buttonModal}
                    />
                  </View>
                </View>
              </View>
            </Modal>
            {/* <View style={styles.line2}></View> */}
            <View style={styles.container_four}>
              <Button
                buttonStyle={styles.buttonSearch}
                iconRight={true}
                icon={
                  <Fontisto
                    name="search"
                    size={24}
                    color="white"
                    style={styles.buttonIcon}
                  />
                }
                title="UÇUŞ ARA"
                titleStyle={styles.btnTitleStyle}
                onPress={() => {
                  //    this.setModalVisible(true);
                  console.log("========>");
                  console.log(this.props.departureDate);
                  console.log(this.props.returnDate);
                }}
              />
            </View>

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
              //format= {moment().format('D')}
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
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
SearchScreen2.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  overlay: {
    // backgroundColor:'rgba(47,163,218, .4)',
    // backgroundColor: 'rgba(0,0,0,.6)',
    backgroundColor: "rgba(255,255,255, .2)",
    height: "100%",
    width: "100%",
    // borderColor: 'purple',
    // borderWidth:2
  },
  segment: {
    width: "95%",
    alignSelf: "center",
    height: 23,
    marginTop: 10,
    marginBottom: 10,
  },
  tabStyle: {
    borderWidth: 1,
    borderColor: "#3ca0cd",
    width: 50,
  },
  activeTabStyle: {
    //color: '#3ca0cd',
    backgroundColor: "#3ca0cd",
  },
  activeTabTextStyle: {
    fontSize: 13,
    color: "#363636",
  },
  tabTextStyle: {
    fontSize: 13,
    color: "#363636",
    fontWeight: "bold",
  },
  container_one: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
    //borderColor: 'red',
    //borderWidth: 2
  },
  iconContainer: {
    alignSelf: "center",
    marginTop: "50%",
    padding: "7%",
    //borderColor: 'yellow',
    //borderWidth: 2
  },
  dateIcon: {
    alignSelf: "center",
    margin: "5%",
    padding: "2%",
    //borderColor: 'yellow',
    //borderWidth: 2
  },
  line: {
    width: "38%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  line2: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    //marginVertical: 5
  },
  container_two: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
    //borderColor: 'yellow',
    //borderWidth: 2
  },
  container_three: {
    justifyContent: "center",
    flexDirection: "row",
    //alignItems: 'stretch',
    margin: 10,
    //borderColor: 'pink',
    //borderWidth: 2
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 8,
    //borderColor: 'pink',
    //borderWidth: 2
  },
  plusIcon: {},
  textYolcu: {
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "#3ca0cd",
    //borderColor: 'pink',
    //borderWidth: 2
  },
  container_four: {
    width: "80%",
    alignSelf: "center",
    //borderColor: 'pink',
    //borderWidth: 2
  },
  buttonSearch: {
    backgroundColor: "#ee7621",
    height: 35,
  },
  buttonModal: {
    backgroundColor: green,
    height: 50,
  },
  buttonIcon: {
    margin: 8,
    alignSelf: "center",
  },
  btnTitleStyle: {
    fontWeight: "normal",
    fontFamily: "sans-serif-medium",
    fontSize: 17,
  },
  modalView: {
    justifyContent: "flex-end",
    margin: 0,
    // width: '100'
  },
  modalHeader: {
    // justifyContent: "flex-start",
    height: "15%",
    // borderBottomWidth: 2,
    // borderBottomColor: green,
    flexDirection: "row",
    // alignContent:'stretch'
  },
  modalHeaderButton: {
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    departureDate: state.passenger.departureDate,
    returnDate: state.passenger.returnDate,
    origin: state.passenger.originAirport,
    destination: state.passenger.destinationAirport,
  };
};

const mapDispatchToProps = () => {
  return {
    setDepartureDate,
    setReturnDate,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SearchScreen2);

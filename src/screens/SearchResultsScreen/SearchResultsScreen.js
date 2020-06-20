import React, { Component } from "react";
import { Button } from "react-native-elements";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList
} from "react-native";
import { CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import FlyGroupList from "./components/FlyGroupList";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/tr";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ModalItem from "./components/ModalItem";
import {
  setDepartureDate,
  setReturnDate,
  setSortValue,
} from "../../actions/passengerAction";
import LottieView from "lottie-react-native";
import { getFlights, queryBuilder } from "../../services/amadeusService";
import FilterModal from '../../components/FilterModal/FilterModal';
import Modal from "react-native-modal";

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      flyObj: [],
      flyObjData: [],
      originalFlights: [],
      queryUrl: "",
      segments: [],
      segmentsCheckList: [],
      filterModalVisible: false,
      returnSegments:[],
      returnSegmentsCheckList: [],
      allClockGoDep:[],
      allClockGoArr:[],
      allClockRetDep:[],
      allClockRetArr:[],
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: (
      <>
        <Text style={styles.headerTitle}>{navigation.getParam("Origin")}</Text>
        <FontAwesome5
          name="exchange-alt"
          size={17}
          color="#ffc501"
          //style={{}}
        />
        <Text style={styles.headerTitle}>
          {navigation.getParam("Destination")}
        </Text>
      </>
    ),
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
      alignSelf: "center",
      textAlign: "center",
    },
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16416c",
    },
    headerRight: null,
    headerLeft: (
      <View style={{ marginLeft: 15 }}>
        <AntDesign
          name="left"
          size={32}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    ),
  });

  setSegmentCheckList(array, array2) {
    if(this.props.selectedWay == 1) {
      this.setState({returnSegmentsCheckList: array2});
    }
    this.setState({segmentsCheckList: array});
    console.log("GELDİİİİİİ");
    this.setState({ flyObjData: [] });
    this.filterTheFlights();
  };

  filterTheFlights() {
    this.filterBySegment();  
  };

filterBySegment() {
    const {originalFlights, segmentsCheckList, segments,returnSegments,returnSegmentsCheckList} = this.state;
    let filteredFligths = [];
    let filteredReturnFligths= [];
    if(this.props.selectedWay == 0) {
      for (let index = 0; index < segmentsCheckList.length; index++) {
        // const element = segmentsCheckList[index];
        if(segmentsCheckList[index]) {
          originalFlights.forEach((element)  => {
            if(element.itineraries[0].segments.length-1 == segments[index]) {
              filteredFligths.push(element)
            }
          })
        }
      }
      console.log("GİDİŞ");
      console.log(filteredFligths.length);
      this.setState({flyObjData:filteredFligths })
    }
    else{
      let count = this.findCount(segmentsCheckList,returnSegmentsCheckList);
      for (let index = 0; index < count; index++) {
        if(returnSegmentsCheckList[index] || segmentsCheckList[index]) {
          filteredReturnFligths = originalFlights.filter((element) => element.itineraries[1].segments.length-1 == returnSegments[index] && element.itineraries[0].segments.length-1 == segments[index])
        }
        
      }
      console.log("DÖNÜŞ");
      console.log(filteredReturnFligths.length);
      this.setState({flyObjData:filteredReturnFligths })
    }
  }

  filterByClock() {

  }

  findCount(array1, array2) {
    if(array1.length>array2.length)
    return array1.length;
    else if(array2.length> array1.length)
    return array2.length;
    else 
    return array1.length;
  }

  componentDidMount() {
    const origin = String(this.props.originAirport.CityName);
    const destination = String(this.props.destinationAirport.CityName);
    this.props.navigation.setParams({ Origin: origin });
    this.props.navigation.setParams({ Destination: destination });

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
    console.log("SEARCH RESULT DID MOUNT");
  }
  

  componentWillReceiveProps(nextProps) {
    if (
      this.props.departureDate != nextProps.departureDate ||
      this.props.returnDate != nextProps.returnDate ||
      this.props.selectedWay != nextProps.selectedWay ||
      this.props.sortValue != nextProps.sortValue 
    )
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
    console.log("NXT PROPS FOR SORT");
    console.log(nextProps);
    //console.log(nextProps);
    console.log("SEARCH RESULT WILL RECEIVE ");
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
    console.log(query);

    getFlights(query)
      .then((response) => {
        // console.log(response.data.data);

        this.setState({ flyObj: response.data });
        this.setState({ originalFlights: response.data.data });
        this.setState({ flyObjData: response.data.data });
        this.setSengments(response.data.data);
        //this.setClocks(response.data.data);
      })
      .catch((err) => {
        console.log(err.response.request._response);
      });
  }

  setSengments(flights) {
    let allSegments = [];
    let allSegmentsReturn = [];
    
    flights.forEach((element) => {
      allSegments.push(element.itineraries[0].segments.length - 1);
    });
    allSegments.sort((a, b) => a - b);

    let segments = allSegments.filter(this.onlyUnique);
    let segmentsCheckList = [];
    segments.forEach(() => {
      segmentsCheckList.push(true);
    });
    this.setState({ segments, segmentsCheckList });
    console.log("==========================>GİDİŞ");
    console.log("SEARCH RESULT SET SEGMENTS WORKING");
    console.log("Gidiş: ",segments);
    console.log("Gidiş: ",segmentsCheckList);
    if(this.props.selectedWay == 1) {
      flights.forEach((element) => {
        allSegmentsReturn.push(element.itineraries[1].segments.length - 1);
      });
      allSegmentsReturn.sort((a, b) => a - b);
  
      let returnSegments = allSegmentsReturn.filter(this.onlyUnique);
      let returnSegmentsCheckList = [];
      returnSegments.forEach(() => {
        returnSegmentsCheckList.push(true);
      });
      this.setState({ returnSegments, returnSegmentsCheckList });
      console.log("==========================>DÖNÜŞ");
      console.log("SEARCH RESULT SET SEGMENTS WORKING");
      console.log("Dönüş: ",returnSegments);
      console.log("Dönüş: ",returnSegmentsCheckList);
    }
  }

  setClocks(clocks) {
    console.log("!!!!!!!!!!!!!!set clock çalıştı!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    let allClockGoDep = [];
    let allClockGoArr = [];
    let allClockRetDep = [];
    let allClockRetArr = [];

    clocks.forEach((element) => {
      allClockGoDep.push(moment(element.itineraries[0].segments[0].departure.at).format("LT"));
      allClockGoArr.push(moment(element.itineraries[0].segments[element.itineraries[0].segments.length-1].arrival.at).format("LT"));
    });
    allClockGoDep.sort((a, b) => a - b);
    allClockGoArr.sort((a, b) => a - b);
    console.log("BBİİRRRR",allClockGoDep )

    this.setState({ allClockGoDep, allClockGoArr});

    if(this.props.selectedWay == 1) {
      clocks.forEach((element) => {
        allClockRetDep.push(moment(element.itineraries[1].segments[0].departure.at).format("LT"));
        allClockRetArr.push(moment(element.itineraries[1].segments[element.itineraries[1].segments.length-1].arrival.at).format("LT"));
      });
      allClockRetDep.sort((a, b) => a - b);
      allClockRetArr.sort((a, b) => a - b);
  
      this.setState({allClockRetDep,allClockRetArr});
    }
  }

  setPrice(prices) {
    
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  setFilterModalVisible = (visible) => {
    this.setState({filterModalVisible: visible});
  };

  render() {
    const {
      modalVisible,
      flyObj,
      flyObjData,
      originalFlights,
      queryUrl,
      filterModalVisible,
      segments,
      segmentsCheckList,
      returnSegments,
      returnSegmentsCheckList,
      allClockGoDep,
      allClockGoArr,
      allClockRetDep,
      allClockRetArr,
    } = this.state;

    return (
      <>
        {this.state.flyObjData.length == 0 ? (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <LottieView
              style={styles.lottieView}
              source={require("../../../assets/animations/15206-plane.json")}
              autoPlay
              loop
            />
          </View>
        ) : (
          <View style={styles.container}>
            {this.props.selectedWay == 1 ? (
              <View style={styles.container_one}>
                <Text style={styles.textStyle}>
                  {" "}
                  {moment(this.props.departureDate).format(
                    "DD MMMM YYYY dddd"
                  )}{" "}
                </Text>
                <FontAwesome5
                  name="exchange-alt"
                  size={17}
                  color="#453914"
                  style={styles.iconStyle}
                />
                <Text style={styles.text2Style}>
                  {" "}
                  {moment(this.props.returnDate).format(
                    "DD MMMM YYYY dddd"
                  )}{" "}
                </Text>
              </View>
            ) : (
              <View style={styles.container_one}>
                <Text style={styles.text3Style}>
                  {moment(this.props.departureDate).format("DD MMMM YYYY dddd")}
                </Text>
              </View>
            )}
            {this.props.selectedWay == 0 ? (
              <View style={styles.container_two}>
                <Button
                  title="Önceki Gün"
                  buttonStyle={styles.btnStyle1}
                  titleStyle={styles.buttonText}
                  onPress={() => {
                    if (
                      moment(this.props.departureDate)
                        .subtract(1, "days")
                        .format("YYYY-MM-DD") < moment().format("YYYY-MM-DD")
                    ) {
                      Alert.alert(
                        "Bilgilendirme",
                        "Gidiş tarihi bugünden küçük olamaz",
                        [{ text: "Tamam", onPress: () => null }]
                      );
                    } else {
                      this.props.setDepartureDate(
                        moment(this.props.departureDate)
                          .subtract(1, "days")
                          .format("YYYY-MM-DD")
                      );
                      this.props.setSortValue(0);
                      console.log("nedennnn");
                    }
                  }}
                />
                <Button
                  title="Sonraki Gün"
                  buttonStyle={styles.btnStyle2}
                  titleStyle={styles.buttonText}
                  onPress={() => {
                    this.props.setDepartureDate(
                      moment(this.props.departureDate)
                        .add(1, "days")
                        .format("YYYY-MM-DD")
                    );
                    this.props.setSortValue(0);
                    console.log("nedennnn");
                  }}
                />
              </View>
            ) : (
              <View style={styles.dateContainer}>
                <View style={styles.dateContainer_one}>
                  <View style={styles.dateContainer_two}>
                    <View
                      style={{
                        backgroundColor: "#474745",
                        height: "100%",
                        paddingHorizontal: 5,
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          alignSelf: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        GİDİŞ
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={styles.box}
                        onPress={() => {
                          if (
                            moment(this.props.departureDate)
                              .subtract(1, "days")
                              .format("YYYY-MM-DD") > this.props.returnDate
                          ) {
                            Alert.alert(
                              "Bilgilendirme",
                              "Gidiş tarihi büyük olamaz",
                              [{ text: "Tamam", onPress: () => null }]
                            );
                          } else if (
                            moment(this.props.departureDate)
                              .subtract(1, "days")
                              .format("YYYY-MM-DD") <
                            moment().format("YYYY-MM-DD")
                          ) {
                            Alert.alert(
                              "Bilgilendirme",
                              "Gidiş tarihi bugünden küçük olamaz",
                              [{ text: "Tamam", onPress: () => null }]
                            );
                          } else {
                            this.props.setDepartureDate(
                              moment(this.props.departureDate)
                                .subtract(1, "days")
                                .format("YYYY-MM-DD")
                            );
                            this.props.setSortValue(0);
                            console.log("nedennnn");
                          }
                        }}
                      >
                        <Text style={styles.boxText}>Önceki Gün</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.box}
                        onPress={() => {
                          if (
                            moment(this.props.departureDate)
                              .add(1, "days")
                              .format("YYYY-MM-DD") > this.props.returnDate
                          ) {
                            Alert.alert(
                              "Bilgilendirme",
                              "Gidiş tarihi büyük olamaz",
                              [{ text: "Tamam", onPress: () => null }]
                            );
                          } else {
                            this.props.setDepartureDate(
                              moment(this.props.departureDate)
                                .add(1, "days")
                                .format("YYYY-MM-DD")
                            );
                            this.props.setSortValue(0);
                            console.log("nedennnn");
                          }
                        }}
                      >
                        <Text style={styles.boxText}>Sonraki Gün</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.dateContainer_one}>
                  <View style={styles.dateContainer_two}>
                    <View
                      style={{
                        backgroundColor: "#474745",
                        height: "100%",
                        paddingHorizontal: 5,
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          alignSelf: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        DÖNÜŞ
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        style={styles.box}
                        onPress={() => {
                          if (
                            moment(this.props.returnDate)
                              .subtract(1, "days")
                              .format("YYYY-MM-DD") < this.props.departureDate
                          ) {
                            Alert.alert(
                              "Bilgilendirme",
                              "Dönüş tarihi küçük olamaz",
                              [{ text: "Tamam", onPress: () => null }]
                            );
                          } else {
                            this.props.setReturnDate(
                              moment(this.props.returnDate)
                                .subtract(1, "days")
                                .format("YYYY-MM-DD")
                            );
                            this.props.setSortValue(0);
                            console.log("nedennnn");
                          }
                        }}
                      >
                        <Text style={styles.boxText}>Önceki Gün</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.box}
                        onPress={() => {
                          if (
                            moment(this.props.returnDate)
                              .add(1, "days")
                              .format("YYYY-MM-DD") < this.props.departureDate
                          ) {
                            Alert.alert(
                              "Bilgilendirme",
                              "Dönüş tarihi küçük olamaz",
                              [{ text: "Tamam", onPress: () => null }]
                            );
                          } else {
                            this.props.setReturnDate(
                              moment(this.props.returnDate)
                                .add(1, "days")
                                .format("YYYY-MM-DD")
                            );
                            this.props.setSortValue(0);
                            console.log("nedennnn");
                          }
                        }}
                      >
                        <Text style={styles.boxText}>Sonraki Gün</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}

            <FlyGroupList
              flyObj={flyObj}
              flyObjData={flyObjData}
              originalFlights={originalFlights}
              queryUrl={queryUrl}
            />

            <View style={styles.filterContainer}>
              <TouchableOpacity
                style={styles.sortStyle}
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <MaterialIcons name="sort" size={30} color="white" />
                <Text style={styles.sortText}>Sırala</Text>
                <ModalItem
                  modalVisible={modalVisible}
                  onPress={(i) => {
                    this.setModalVisible(i);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sortStyle}
                onPress={() => this.setFilterModalVisible(true)}
              >
                <Feather name="filter" size={30} color="white" />
                <Text style={styles.sortText}>Filtrele</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortStyle}>
                <Feather name="bell" size={30} color="white" />
                <Text style={styles.sortText}>Fiyat Alarmı</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.lastStyle}>
                <Feather name="share" size={30} color="white" />
                <Text style={styles.sortText}>Paylaş</Text>
              </TouchableOpacity>
            </View>
          <Modal
          testID={"modal"}
          isVisible={filterModalVisible}
          onSwipeComplete={() => this.setFilterModalVisible(false)}
          swipeDirection={["down", "left", "up", "right"]}
            //visible={filterModalVisible}
            //animationType="slide"
            style= {styles.modalSttyle}
          >
              <FilterModal 
                segments={segments} 
                segmentsCheckList={segmentsCheckList} 
                returnSegments={returnSegments}
                returnSegmentsCheckList= {returnSegmentsCheckList}
                onPress={(array, array2) => {this.setSegmentCheckList(array, array2)}} 
                onClick={(value)=> this.setFilterModalVisible(value)}
                selectedWay={this.props.selectedWay}
                allClockGoDep={allClockGoDep}
                allClockGoArr={allClockGoArr}
                allClockRetDep={allClockRetDep}
                allClockRetArr={allClockRetArr}
              />  
          </Modal>

          </View>
        )}

         
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16416c",
    flex: 1,
  },
  container_one: {
    backgroundColor: "#ffc501",
    height: 35,
    flexDirection: "column",
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    alignSelf: "flex-start",
    padding: 5,
  },
  text3Style: {
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    alignSelf: "center",
    padding: 5,
  },
  text2Style: {
    fontSize: 14,
    color: "#453914",
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "flex-end",
    textAlign: "center",
    padding: 5,
  },
  iconStyle: {
    alignSelf: "center",
    position: "absolute",
  },
  filterContainer: {
    //justifyContent: 'flex-end',
    backgroundColor: "#474745",
    flexDirection: "row",
    // width:100,
    // height:50
  },
  sortStyle: {
    // borderColor: "blue",
    // borderWidth: 1,
    width: "25%",
    alignItems: "center",
    marginVertical: 10,
    borderRightColor: "#6e6e6c",
    borderRightWidth: 3,
  },
  lastStyle: {
    // borderColor: "blue",
    // borderWidth: 1,
    width: "25%",
    alignItems: "center",
    marginVertical: 10,
  },
  sortText: {
    color: "white",
    fontSize: 14,
    paddingTop: 3,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
    marginRight: 10,
    marginLeft: 10,
  },
  container_two: {
    flexDirection: "row",
    //backgroundColor: "rgba(52, 98, 168, 0.36)",
    //justifyContent: "space-between",
    marginTop: 10,
  },
  btnStyle2: {
    backgroundColor: "#474745",
    height: 35,
    width: "80%",
    // position: 'absolute',
    alignSelf: "flex-end",
    borderRadius: 0,
    borderColor: "#6e6e6c",
  },
  btnStyle1: {
    backgroundColor: "#474745",
    height: 35,
    width: "80%",
    //position:'absolute',
    alignSelf: "flex-start",
    borderRadius: 0,
    borderColor: "#6e6e6c",
  },
  buttonText: {
    textAlign: "center",
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  dateContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 5,
  },
  box: {
    margin: 5,
    height: 40,
    width: 60,
    backgroundColor: "#ffc501",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#474745",
    paddingHorizontal: 5,
  },
  dateContainer_one: {
    flexDirection: "column",
    width: "50%",
  },
  dateContainer_two: {
    flexDirection: "row",
  },
  modalSttyle: {
    flex:1,
    backgroundColor:'white'
  }
});

const mapStateToProps = (state) => {
  return {
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

const mapDispatchToProps = () => {
  return {
    setDepartureDate,
    setReturnDate,
    setSortValue,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(SearchResultsScreen);

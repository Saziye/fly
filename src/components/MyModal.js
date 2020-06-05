import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Modal from "react-native-modal";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Button } from "react-native-elements";
import { PassengerRow } from "../screens/SearchScreen/components/PassengerRow";
import { FontAwesome5 } from "@expo/vector-icons";
// import RadioButton from "../screens/SearchScreen/components/RadioButton";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
//import for redux
import { connect } from "react-redux";
import { setPassengers, setCabinClass } from "../actions/passengerAction";

const orange = "#ee7621";

const passengerMap = [
  { type: "adult", label: "Yetişkin", sub: null },
  { type: "child", label: "Çocuk", sub: "(2-12 Yaş)" },
  { type: "infant", label: "Bebek", sub: "(0-2 Yaş)" },
  { type: "senior", label: "65 yaş üstü", sub: null },
  { type: "student", label: "Öğrenci", sub: "(12-24 Yaş)" },
];

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible,
      selectedIndex: 0,
      cabinMap: [
        { type: "economy", label: "Ekonomi", selected: true, value: 0 },
        { type: "bussiness", label: "Bussiness", selected: false, value: 1 },
      ],
      flightType: 0,
      countPassenger: 0,
    };
  }
  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  };

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  setCabinRadio(index) {
    console.log("===========set cabin radio");
    console.log(index);
    if (index === 0) {
      this.setState({
        cabinMap: [
          { type: "economy", label: "Ekonomi", selected: true },
          { type: "bussiness", label: "Bussiness", selected: false },
        ],
      });
    } else {
      this.setState({
        cabinMap: [
          { type: "economy", label: "Ekonomi", selected: false },
          { type: "bussiness", label: "Bussiness", selected: true },
        ],
      });
    }
    console.log(this.state.cabinMap[index].type);
    
    this.props.setCabinClass(this.state.cabinMap[index].type);
  };

  //////////////////
  onDecrement(type) {
    let passengers = this.props.passengers;
    let count = passengers[type] - 1;
    passengers[type] = count;
    this.onPassenger(passengers);
    this.setState({countPassenger: this.state.countPassenger-1});
  };

  onIncrement(type) {
    let passengers = this.props.passengers ;
    let count = passengers[type] + 1;
    passengers[type] = count;
    this.onPassenger(passengers);
    this.setState({countPassenger: this.state.countPassenger+1});
  };

  onPassenger(passengers) {
    if (this.state.countPassenger > 0) {
      this.props.setPassengers(passengers);
    } else {
      // Alert.alert("E az 1 yolcu seçmelisiniz");
    }
  };
  /////////////////////

  render() {
    const { modalVisible, selectedIndex, cabinMap } = this.state;

    return (
      <Modal
        testID={"modal"}
        isVisible={modalVisible}
        onSwipeComplete={this.close}
        swipeDirection={["up", "left", "right", "down"]}
        style={styles.modalView}
      >
        <View style={styles.containerOne}>
          <View style={styles.modalHeader}>
            <SegmentedControlTab
              tabsContainerStyle={styles.segment}
              values={["Yolcu Sayısı", "Kabin Sınıfı"]}
              selectedIndex={this.state.selectedIndex}
              onTabPress={this.handleIndexChange}
              //borderRadius={5}
              activeTabStyle={styles.activeTabStyle}
              activeTabTextStyle={styles.activeTabTextStyle}
              tabTextStyle={styles.tabTextStyle}
              tabStyle={styles.tabStyle}
            />
          </View>
          {selectedIndex === 0 ? (
            <View style={styles.containerPassenger}>
              {passengerMap.map((passenger, index) => (
                <PassengerRow
                  key={index}
                  onDecrement={(type) => this.onDecrement(type)}
                  onIncrement={(type) => this.onIncrement(type)}
                  type={passenger.type}
                  label={passenger.label}
                  sub={passenger.sub}
                  count={ this.props.passengers[passenger.type] }
                />
              ))}
            </View>
          ) : (
            <View style={styles.containerClass}>
              {/* <RadioForm
                radio_props={cabinMap}
                initial={0}
                onPress={(value) => {
                    console.log(value);
                  this.setState({ flightType: value });
                }}
                
              /> */}
              <View style={styles.radioFrmStyle}>
                <RadioForm formHorizontal={false} animation={true}>
                  {cabinMap.map((cabin, i) => (
                    <RadioButton labelHorizontal={true} key={i}>
                      <View style={styles.radioBtnStyle}>
                        <RadioButtonLabel
                          obj={cabin}
                          index={i}
                          labelHorizontal={true}
                          onPress={(value) =>
                            this.setState({ flightType: value })
                          }
                          labelStyle={{
                            fontSize: 16,
                            color: "#9b9e9f",
                            //marginLeft: 10,
                            fontWeight: "bold",
                          }}
                          labelWrapStyle={{}}
                        />
                      </View>
                      <View style={styles.radioInptStyle}>
                        <RadioButtonInput
                          obj={cabin}
                          index={i}
                          isSelected={this.state.flightType === i}
                          onPress={(value) =>
                            this.setState({ flightType: value })
                          }
                          borderWidth={2}
                          buttonInnerColor={orange}
                          buttonOuterColor={
                            this.state.flightType === i ? orange : "#9b9e9f"
                          }
                          buttonSize={12}
                          buttonOuterSize={20}
                          buttonStyle={{}}
                          buttonWrapStyle={{ marginLeft: 10 }}
                        />
                      </View>
                    </RadioButton>
                  ))}
                </RadioForm>
              </View>
            </View>
          )}
          <View style={styles.containerButton}>
            <Button
              title="Tamam"
              buttonStyle={styles.buttonModal}
              icon={
                <FontAwesome5
                  name="user-plus"
                  size={18}
                  color="#fff"
                  style={styles.icon}
                />
              }
              titleStyle={styles.buttonText}
            />
          </View>
          <Button onPress={()=> {
            console.log(this.props.passengers);
            console.log(this.props.cabinClass);
          }}/>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  containerOne: {
    backgroundColor: "#fff",
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    borderColor: "red",
    borderWidth: 1,
  },
  modalHeader: {
    justifyContent: "flex-start",
    height: "15%",
    borderWidth: 3,
    borderColor: "blue",
  },
  buttonModal: {
    backgroundColor: orange,
    height: 35,
    width: "80%",
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  segment: {
    width: "100%",
    alignSelf: "center",
    height: "90%",
  },
  tabStyle: {
    borderWidth: 0,
    borderColor: "white",
  },
  activeTabStyle: {
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: orange,
  },
  activeTabTextStyle: {
    fontSize: 16,
    color: orange,
  },
  tabTextStyle: {
    fontSize: 16,
    color: "#9b9e9f",
    fontWeight: "bold",
  },
  containerPassenger: {
    borderColor: "green",
    borderWidth: 2,
  },
  containerButton: {
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    //alignItems: 'center'
  },
  icon: {
    padding: 6,
    alignSelf: "center",
  },
  containerClass: {
    borderColor: "green",
    borderWidth: 2,
    height: "65%",
  },
  radioBtnStyle: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    width: "80%",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  radioInptStyle: {
    borderColor: "pink",
    borderWidth: 1,
    width: "20%",
    alignSelf: "center",
  },
  radioFrmStyle: {
    borderColor: "blue",
    borderWidth: 1,
    marginTop: 20,
    //alignItems:'flex-start'
  },
});

const mapStateToProps = (state) => {
  return {
    passengers: state.passenger.passengers,
    cabinClass: state.passenger.cabinClass,
  };
};

const mapDispatchToProps = () => {
  return {
    setPassengers,
    setCabinClass,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(MyModal);

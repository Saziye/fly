import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Modal from "react-native-modal";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Button } from "react-native-elements";
import { PassengerRow } from "../screens/SearchScreen/components/PassengerRow";
import { FontAwesome5 } from "@expo/vector-icons";
import RadioButton from "../screens/SearchScreen/components/RadioButton";

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
        { type: "economy", label: "Ekonomi", selected: true },
        { type: "bussiness", label: "Bussiness", selected: false },
      ],
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
      console.log('===========set cabin radio');
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
  }

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
                  // count={ passengers[passenger.type] }
                />
              ))}
            </View>
          ) : (
            <View style={styles.containerClass}>
              {cabinMap.map((cabin, i) => (
                //   <Text>{cabin.label}</Text>
                <RadioButton
                  key={i}
                  label={cabin.label}
                  type={cabin.type}
                  selected={cabin.selected}
                  onSelect={() => this.setCabinRadio(i)}
                />
              ))}
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
  },
});

export default MyModal;

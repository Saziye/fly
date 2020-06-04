import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Button } from "react-native-elements";
import { ButtonGroup } from "react-native-elements";
import { PassengerRow } from "../screens/SearchScreen/components/PassengerRow";
import { FontAwesome5 } from "@expo/vector-icons";

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

  render() {
    const { modalVisible, selectedIndex } = this.state;
    const buttons = ["Yolcu Sayısı", "Kabin Sınıfı"];

    return (
      <Modal
        testID={"modal"}
        isVisible={modalVisible}
        onSwipeComplete={this.close}
        swipeDirection={["up", "left", "right", "down"]}
        style={styles.modalView}
      >
        <View style={styles.containerPassenger}>
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
          <View style={styles.containerTwo}>
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
          <View style={styles.containerThree}>
            <Button 
                title="Tamam" 
                buttonStyle={styles.buttonModal}
                icon={<FontAwesome5
                    name="user-plus"
                    size={18}
                    color="#fff"
                    style={styles.icon}
                />}
                titleStyle= {styles.buttonText} 
            />
          </View>
        </View>

        <View style= {styles.containerClass}>

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
  containerPassenger: {
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
    width: '80%',
    alignSelf:'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
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
  containerTwo: {
    borderColor: "green",
    borderWidth: 2,
  },
  containerThree: {
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    //alignItems: 'center'
  },
  icon: {
      padding:6,
      alignSelf: 'center'
  },
  containerClass: {
      
  }
});

export default MyModal;

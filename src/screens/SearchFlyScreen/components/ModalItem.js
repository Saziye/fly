import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Button } from "react-native-elements";
//import for redux
import { connect } from "react-redux";
import { setCabinClass } from "../../../actions/passengerAction";

class ModalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible,
      cabinMap: [
        { type: "all", label: "Tüm Sınıflar", value: 0 },
        { type: "economy", label: "Ekonomi", value: 1 },
        { type: "bussiness", label: "Bussiness", value: 2 },
      ],
      cabinLabel: "",
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  //   setCabinRadio(index) {

  //     //this.props.setCabinClass(this.state.cabinMap[index].type);
  //   };

  keyExtractor = (item, index) => index.toString();

  cabinItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.setCabinClass(this.state.cabinMap[index].type);
        this.setState({cabinLabel: this.state.cabinMap[index].label })
        //console.log(this.props.cabinClass);
        this.setState({modalVisible: false})
      }}
    >
      <View>
        <View style={styles.listItem}>
          <Text style={styles.textListItem}>{item.label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { modalVisible, cabinMap } = this.state;

    return (
      <Modal
        testID={"modal"}
        isVisible={modalVisible}
        onSwipeComplete={() => this.setModalVisible(false)}
        swipeDirection={["left", "right", "down"]}
        style={styles.modalView}
      >
        <View style={styles.containerOne}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>Sınıf Seçiniz</Text>
          </View>
          <View style={styles.containerTwo}>
            <ScrollView>
              <FlatList
                data={cabinMap}
                keyExtractor={this.keyExtractor}
                renderItem={this.cabinItem}
              />
            </ScrollView>
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
    height: "35%",
    width: "100%",
    flexDirection: "column",
    borderColor: "red",
    borderWidth: 1,
  },
  modalHeader: {
    justifyContent: "flex-start",
    height: "20%",
    borderBottomWidth: 2,
    borderBottomColor: "#393939",
    justifyContent: "center",
  },
  headerText: {
    //textAlign: "center",
    marginLeft: "6%",
    padding: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  containerTwo: {
    // borderWidth:1,
    // borderColor: 'green',
    flex: 1,
    marginTop: "1%",
    marginHorizontal: "5%",
  },
  listItem: {
    // flexDirection: "row",
    // borderColor: 'blue',
    // borderWidth: 1,
    paddingVertical: "5%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textListItem: {
    color: "#4e4e4e",
    fontSize: 14,
  },
});

const mapStateToProps = (state) => {
  return {
    cabinClass: state.passenger.cabinClass,
    // fly: state.passenger.flyType,
  };
};

const mapDispatchToProps = () => {
  return {
    setCabinClass,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ModalItem);

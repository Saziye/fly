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
import { AntDesign } from "@expo/vector-icons";
//import for redux
import { connect } from "react-redux";
import { setCabinClass } from "../../../actions/passengerAction";

class ModalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible,
      cabinMap: [
        { type: "", label: "Tüm Sınıflar", value: 0 },
        { type: "ECONOMY", label: "Ekonomi", value: 1 },
        { type: "BUSINESS", label: "Bussiness", value: 2 },
        { type: "PREMIUM_ECONOMY", label: "Premium Ekonomi", value: 3 },
        { type: "FIRST", label: "First", value: 4 },
      ],
      setModalVisible: (i) => {
        props.onPress(i);
      },
      selectedCabin: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modalVisible: nextProps.modalVisible });
  }

  keyExtractor = (item, index) => index.toString();

  cabinItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.setCabinClass(this.state.cabinMap[index].type);
        this.setState({ selectedCabin: `${item.type}` });
        this.state.setModalVisible(false);
      }}
    >
      <View style={styles.listItem}>
        <Text style={styles.textListItem}>{item.label}</Text>
        {this.state.selectedCabin == item.type ? (
          <AntDesign name="checkcircleo" size={20} color="#ffc501" />
        ) : null}
      </View>
    </TouchableOpacity>
  );

  render() {
    const { modalVisible, cabinMap } = this.state;

    return (
      <Modal
        testID={"modal"}
        isVisible={modalVisible}
        onSwipeComplete={() => this.props.onPress(false)}
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
    height: "50%",
    width: "100%",
    flexDirection: "column",
    // borderColor: "red",
    // borderWidth: 1,
  },
  modalHeader: {
    justifyContent: "flex-start",
    height: "15%",
    borderBottomWidth: 2,
    borderBottomColor: "#393939",
    justifyContent: "center",
  },
  headerText: {
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
    flexDirection: "row",
    paddingVertical: "4%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textListItem: {
    color: "#4e4e4e",
    fontSize: 14,
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    cabinClass: state.passenger.cabinClass,
  };
};

const mapDispatchToProps = () => {
  return {
    setCabinClass,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ModalItem);

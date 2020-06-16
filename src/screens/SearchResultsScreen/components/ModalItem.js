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
import { AntDesign } from '@expo/vector-icons';
//for redux
import { connect } from "react-redux";
import {
  setSortValue
} from "../../../actions/passengerAction";
class ModalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSort: 0,
      modalVisible: props.modalVisible,
      SortMap: [
        { type: "price", label: "Fiyata Göre", value: 0 },
        { type: "departureTime", label: "Kalkış Zamanına Göre", value: 1 },
        { type: "returnTime", label: "Varış Zamanına Göre", value: 2 },
        { type: "airline", label: "Havayoluna Göre", value: 3 },
      ],
      setModalVisible: (i) => {props.onPress(i)}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({modalVisible: nextProps.modalVisible})
  }
 
  keyExtractor = (item, index) => index.toString();

  sortItem = ({ item}) => (
    <TouchableOpacity
      onPress={() => {
        this.state.setModalVisible(false)
        this.setState({selectedSort: `${item.value}`}); 
        this.props.setSortValue(this.state.selectedSort);
      }}
    >
        <View style={styles.listItem}>
          <Text style={styles.textListItem}>{item.label}</Text>
          {
            this.state.selectedSort == item.value ? <AntDesign name="checkcircleo" size={20} color="#ffc501"/> : null
          }
        </View>
      
    </TouchableOpacity>
  );

  render() {
    const { modalVisible, SortMap,selectedSort } = this.state;

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
            <Text style={styles.headerText}>Sırala</Text>
          </View>
          <View style={styles.containerTwo}>
            <ScrollView>
              <FlatList
                data={SortMap}
                keyExtractor={this.keyExtractor}
                renderItem={this.sortItem}
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
    height: "20%",
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
    paddingVertical: "5%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  textListItem: {
    color: "#4e4e4e",
    fontSize: 14,
    flex:1,

  },
});

const mapStateToProps = (state) => {
  return {
    sortValue: state.passenger.sortValue,
  };
};

const mapDispatchToProps = () => {
  return {
    setSortValue
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ModalItem);

import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
//import ModalItem from './ModalItem';

class SortScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const {modalVisible } = this.state;

    return (
    <View>
      {/* <ModalItem
          modalVisible={modalVisible}
          onPress={(i) => {
            this.setModalVisible(i);
          }}
        /> */}
    </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SortScreen;

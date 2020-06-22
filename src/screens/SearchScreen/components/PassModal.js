import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import {ButtonGroup} from 'react-native-elements';
import { PassengerRow } from './PassengerRow'

const passengerMap = [
  { type: 'adult', label: 'Yetişkin', sub: null },
  { type: 'child', label: 'Çocuk', sub: '(2-12 Yaş)' },
  { type: 'infant', label: 'Bebek', sub: '(0-2 Yaş)' },
  { type: 'senior', label: '65 yaş üstü', sub: null },
  { type: 'student', label: 'Öğrenci', sub: '(12-24 Yaş)' },
]


class PassModal extends Component {

  constructor(props){
    super(props)
      this.state = {
        modalVisible: props.modalVisible,
        buttonSelectedIndex: 0
      }
  }

  setModalVisible = (visible) => {
    this.setState({ 
      modalVisible: visible, 
    });
  }

  updateIndex = (index) => {
    this.setState({
      ...this.state,
      buttonSelectedIndex: index,
    });
  }


  render() {

    const { modalVisible, buttonSelectedIndex } = this.state;
    const buttons = ['Ekonomi', 'Bussiness']
    //console.log('açıldı');

    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
          //presentationStyle= "formSheet"
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Kabin ve Yolcu Seçimi</Text>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={buttonSelectedIndex}
                buttons={buttons}
                containerStyle={styles.containerStyle}
                buttonStyle= {styles.buttonStyle}
                selectedButtonStyle= {styles.selectedButtonStyle}
                selectedTextStyle= {styles.selectedTextStyle}
                textStyle= {styles.buttonTextStyle}
              />
              <View style={styles.container}>
                {
                  passengerMap.map((passenger, index) => (
                    <PassengerRow
                      key={ index }
                      onDecrement={ type => this.onDecrement(type) }
                      onIncrement={ type => this.onIncrement(type) }
                      type={ passenger.type }
                      label={ passenger.label }
                      sub={ passenger.sub }
                    // count={ passengers[passenger.type] }
                    />
                  ))
                }
                <TouchableHighlight
                  style={styles.okButton}
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>Tamam</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  okButton: {
    backgroundColor: '#FEDBA6',
    borderRadius: 5,
    alignSelf: 'center',
    margin: 20,
    padding: 15,
    // elevation: 2
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#908f8f',
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center",
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#908f8f',
  },
  buttonStyle: {
    borderColor: '#FEDBA6',
    borderWidth:2,
  },
  containerStyle: {
    borderColor: '#FEDBA6',
    borderWidth:1,
    height: 40,
  },
  selectedButtonStyle: {
    backgroundColor: '#FEDBA6',
  },
  selectedTextStyle: {
    fontSize: 18,
    color: '#908f8f'
  },
  buttonTextStyle: {
    fontSize: 18,
    color: '#FEDBA6',
    fontWeight: 'bold'
  },
});

export default PassModal;
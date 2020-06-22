import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker'

class MyDatePicker extends Component {
  
  constructor(props){
    super(props)
    this.state = {
     date: props.date,
    }
  }

  render(){

    const  { date } = this.state; 

    return (
      <View style = {styles.backgroundStyle} >
        <DatePicker
          style={{
            width:190,
            marginTop:5,
            flex: 1,
          }}
          date= {date}
          mode="date"
          placeholder= 't'
          format="DD-MM-YYYY"
          minDate={new Date()}
          //maxDate={new Date()}
          confirmBtnText="Tamam"
          cancelBtnText="Vazgeç"
          showIcon= {true}
          iconSource= {require('../../assets/images/calendar_icon.png')}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              alignSelf: 'flex-start',
              right:6,
              flex:1  
            },
            dateInput: {
              marginHorizontal:2,
              borderColor: '#FEDBA6',
              borderRadius: 5,
              borderWidth: 3,
              backgroundColor: 'white',
              height:45,
              marginTop:5,
              marginBottom:10
            },
            datePicker: {
              backgroundColor:'red',

            },
            dateTouchBody: {
              borderColor: 'red',
              shadowColor: 'red'
            },
            placeholderText: {
              fontSize:18,
              fontWeight: 'bold',

            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            console.log(date)
            this.setState({date: date})
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row', //iconu ve textinputu yatay olarak(aynı satırda) sırala
    height:45,
    width:195

  },
  iconStyle: {
    alignSelf: 'flex-start', //iconu center'a yerleştirir
    //marginHorizontal: 8, //icon'un sağ ve sol tarafına boşluk ekler
},
});

export default MyDatePicker;
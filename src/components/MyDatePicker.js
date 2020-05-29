import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { AntDesign } from '@expo/vector-icons';

class MyDatePicker extends Component {
  
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
      <DatePicker
        style={{
          width: 400,

        }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource= {<AntDesign name="down" size={20} color="#3a5fcd" />}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          console.log(date)
          this.setState({date: date})
        }}
      />
    )
  }
}

export default MyDatePicker;
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const WHITE = "#fff";

const DateItem = ({ title, date, mounth, year, day, click }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={styles.textTitle}>{title}</Text>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity onPress={click}>
        <View style={styles.container_two}>
          <View style={styles.dateStyle}>
            <Text style={styles.textDate}>{date}</Text>
          </View>
          <View style={styles.container_three}>
            <View style={styles.mounthStyle}>
              <Text style={styles.textMounth}>{mounth}</Text>
            </View>
            <View style={styles.yearStyle}>
              <Text style={styles.textYear}>{year}</Text>
            </View>
          </View>
        </View>
        <View >
          <View style={styles.dayStyle}>
            <Text style={styles.textDay}>{day}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "blue",
    // borderWidth: 2,
    width: "40%",
    padding: 15,
    margin:5
    //margin: 5,
    //padding:5,
  },
  titleStyle: {
    // borderColor: "red",
    // borderWidth: 2,
  },
  textTitle: {
    fontSize: 15,
    textAlign: "center",
    color: WHITE,
    justifyContent: "center",
  },
  container_two: {
    // borderColor: "black",
    // borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
//   dateStyle: {
//     borderColor: "red",
//     borderWidth: 2,
//     justifyContent: 'center',
//     marginLeft: '5%',
//     width: '60%',
//     // height: '50%',
//   },
  textDate: {
    fontSize: 40,
    textAlign: "center",
    color: WHITE,
    fontWeight: 'bold',
  },
  mounthStyle: {
    // borderColor: "red",
    // borderWidth: 2,
  },
  textMounth: {
    fontSize: 15,
    textAlign: "center",
    color: WHITE,
    justifyContent: "center",
    fontWeight: 'bold',
  },
  yearStyle: {
    // borderColor: "red",
    // borderWidth: 2,
  },
  textYear: {
    fontSize: 12,
    textAlign: "center",
    color: WHITE,
    fontWeight: 'bold',

  },
  container_three: {
    // borderColor: "green",
    // borderWidth: 2,
    alignItems:'center',
    flexDirection: 'column',
    width: '30%',
    alignSelf: 'center',
  },
  dayStyle: {
    // borderColor: "red",
    // borderWidth: 2,
  },
  textDay: {
    fontSize: 13,
    textAlign: "center",
    color: WHITE,
    justifyContent: "center",
    fontWeight: 'bold',

  },
  line: {
    width: "90%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginTop:3,
    marginBottom:5
  },
});

export default DateItem;

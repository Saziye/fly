import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "react-native-elements";
import { connect } from "react-redux";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      allClockGoDep:this.props.allClockGoDep,
      allClockGoArr:this.props.allClockGoArr,
      allClockRetDep:this.props.allClockRetDep,
      allClockRetArr:this.props.allClockRetArr,
      goDepValue: '',
      goArrValue: '',
      retDepValue: '',
      retArrValue: ''
     };
  }
  componentDidMount() {
    console.log(this.props.allClockGoDep);
    console.log(this.props.allClockGoArr);
    console.log(this.props.allClockRetDep);
    console.log(this.props.allClockRetArr);
    console.log(this.props.allClockGoDep[0]);
    
    
  }
  render() {
    const { allClockGoDep, allClockGoArr,allClockRetDep, allClockRetArr, goDepValue,goArrValue,retDepValue,retArrValue } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container_header}>
          <Text style={styles.textHeader}>GİDİŞ</Text>
        </View>
        <View style={styles.container_one}>
          <Text style={styles.labelText}> Kalkış Saati</Text>
          <View style={styles.container_three}>
            <Text style={styles.textStyle}>Min </Text>
            <Text style={styles.textStyle2}>Max </Text>
          </View>
          <Slider
            value={goDepValue}
            // minimumValue={Number(allClockGoDep[0])}
            // maximumValue={Number(allClockGoDep[allClockGoDep.length-1])}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(goDepValue) => this.setState({ goDepValue })}
          />

          <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelText}> Kalkış: </Text>
          <Text style= {{textAlign: 'center', marginVertical:10}}>  {goDepValue}</Text>
          </View>
        </View>
        <View style={styles.container_one}>
          <Text style={styles.labelText}> Varış Saati</Text>
          <View style={styles.container_three}>
            <Text style={styles.textStyle}>Min </Text>
            <Text style={styles.textStyle2}>Max </Text>
          </View>
          <Slider
            value={goArrValue}
            // minimumValue={allClockGoArr[0]}
            // maximumValue={allClockGoArr[allClockGoArr.length-1]}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(goArrValue) => this.setState({ goArrValue })}
          />
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelText}> Varış: </Text>
          <Text style= {{textAlign: 'center', marginVertical:10}}>  {goArrValue}</Text>
          </View>
        </View>
        {this.props.selectedWay == 1 ? (
          <>
          <View style={styles.container_header}>
          <Text style={styles.textHeader}>DÖNÜŞ</Text>
        </View>
        <View style={styles.container_one}>
          <Text style={styles.labelText}> Kalkış Saati</Text>
          <View style={styles.container_three}>
            <Text style={styles.textStyle}>Min </Text>
            <Text style={styles.textStyle2}>Max </Text>
          </View>
          <Slider
            value={retDepValue}
            // minimumValue={allClockRetDep[0]}
            // maximumValue={allClockRetDep[allClockRetDep.length-1]}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(retDepValue) => this.setState({ retDepValue })}
          />
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelText}> Kalkış: </Text>
          <Text style= {{textAlign: 'center', marginVertical:10}}>  {retDepValue}</Text>
          </View>
        </View>
        <View style={styles.container_one}>
          <Text style={styles.labelText}> Varış Saati</Text>
          <View style={styles.container_three}>
            <Text style={styles.textStyle}>Min </Text>
            <Text style={styles.textStyle2}>Max </Text>
          </View>
          <Slider
            value={retArrValue}
            // minimumValue={allClockRetArr[0]}
            // maximumValue={allClockRetArr[allClockRetArr.length-1]}
            minimumValue={10}
            maximumValue={20}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(retArrValue) => this.setState({ retArrValue })}
          />
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelText}> Varış: </Text>
          <Text style= {{textAlign: 'center', marginVertical:10}}>  {retArrValue}</Text>
          </View>
        </View>
        </>
        ) : null}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  container_one: {
    marginHorizontal: 10,
  },
  container_three: {
    flexDirection: "row",
    position: "relative",
    marginTop: 5
  },
  labelText: {
    fontSize: 15,
    marginVertical: 5,
    fontWeight: "bold",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textStyle2: {
    right: 0,
    position: "absolute",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  container_header: {
    backgroundColor: "#343434",
    height: 40,
    justifyContent: "center",
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffc501",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    selectedWay: state.passenger.selectedWay,
  };
};

export default connect(mapStateToProps)(Clock);

import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "react-native-elements";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      allPriceArr: this.props.allPriceArr,
    };
  }
  componentDidMount() {
    // console.log("PRICE", this.props.allPriceArr);
    this.setState({price: this.props.allPriceArr[0]});
  }

  // enableScroll = () => this.setState({ scrollEnabled: true });
  // disableScroll = () => this.setState({ scrollEnabled: false });
  
  render() {
    const { price,allPriceArr } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container_header}>
          <Text style={styles.textHeader}>FİYAT</Text>
        </View>
        <View style={styles.container_one}>
          
          <View style={styles.container_three}>
            <Text style={styles.textStyle}>{allPriceArr[0]} TL</Text>
            <Text style={styles.textStyle2}>{allPriceArr[allPriceArr.length-1]} TL</Text>
          </View>
          <Slider
            value={Number(allPriceArr[0])}
            step={1}
            minimumValue={Number(allPriceArr[0])}
            maximumValue={Number(allPriceArr[allPriceArr.length-1])}
            minimumTrackTintColor={"#3f3f3f"}
            maximumTrackTintColor={"#ffc501"}
            thumbTintColor={"#ffc501"}
            trackStyle={{ borderColor: "#3f3f3f" }}
            onValueChange={(price) => {
              this.state.price = this.state.price
              this.setState({price})
    
              this.props.setPriceFunc(price);
              // console.log("DENE:", this.state.price)
              }}
          />
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelText}> Fiyat:  </Text>
          <Text style= {{textAlign: 'center', marginVertical:10, fontSize: 16}}>{String(price)} TL </Text>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_one: {
    marginHorizontal: 10,
  },
  container_three: {
    flexDirection: "row",
    position: "relative",
    marginTop: 10
  },
  labelText: {
    fontSize: 15,
    marginVertical: 10,
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

export default Price;

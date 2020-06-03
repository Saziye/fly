import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {getAirports} from '../../services/airportService'


class AirportsListScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
           searchTerm: '',
           type:'',
           airports: []
        };
    }
    componentDidMount() {
        const {navigation} = this.props;
        this.setState({type: navigation.state.params.type})
        getAirports().then((airportRes) => {
            console.log('=======================RES')
            console.log(airportRes);
            this.setState({airports: airportRes.data})
        });
        
    }

    keyExtractor = (item, index) => index.toString();

    airportItem = ({ item }) => (
        <TouchableOpacity >
            <Text> {item.CityName} </Text>
        </TouchableOpacity>
    );


    render() {
        const { type, airports } = this.state;

        return (
            <SafeAreaView forceInset= {{top: "always"}} >
                <Text>{type== 0? 'Gidiş Havalimanını Seçiniz': 'Dönüş Havalimanını Seçiniz'}</Text>
                <View style={styles.sContainer}>
                    <TextInput
                    placeholder={"Search"}
                    style={styles.sSearchBar}
                    onChangeText={searchTerm => this.setState({ searchTerm })}
                    />
                </View>
                <FlatList
                        // showsHorizontalScrollIndicator={false}
                        data={airports}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.airportItem}
                    />
            </SafeAreaView>
        );
    }
}

AirportsListScreen.navigationOptions = () => {
    return {
        // headerShown: false
        title: 'Havalimanı'
    };
};

const styles = StyleSheet.create({
    sContainer: {
        flex: 1,
        backgroundColor: "#F5FCFF"
      },
      sTextItem: {
        height: 50,
        width: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18
      },
      sSearchBar: {
        paddingHorizontal: 10,
        margin: 10,
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        fontSize: 18
      }
});

export default AirportsListScreen;
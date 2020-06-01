import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import SearchBar from '../../components/SearchBar';
import Spacer from '../../components/Spacer';
import instance from '../../api';

class OriginListScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            airports: []
        };
    }

    componentDidMount() {
        instance.get('/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=r&page[limit]=100').then((data) => {
            console.log('=========================DATA => ')
            console.log(data.data.data);
            this.setState({ airports: data.data.data })
        })
    }


    airportItem = ({ item }) => (
        <TouchableOpacity  style={styles.airportItem}>
            <Text> {item.name} </Text>
        </TouchableOpacity>
    );
    

    render() {

        const { airports } = this.state;

        return (

            <View style={{ flex: 1 }}>

                <View style={styles.container}>
                    <Text style={styles.textStyle} >Nereden</Text>
                    <View style={{ flex: 1 }}>
                        <SearchBar
                            pholder="Şehir veya Havalimanı"
                        />
                    </View>
                </View>
                <View >
                    {/* <FlatList
                        data={addresses}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.airportItem}
                        ItemSeparatorComponent={this.renderSeparator}
                        contentContainerStyle={styles.addressList}
                    /> */}
                    <FlatList
                        
                        // showsHorizontalScrollIndicator={false}
                        data={airports}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.airportItem}
                    />
                    {/* <Text>{airports.length}</Text> */}
                </View>
            </View>

        );
    }
};

OriginListScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: '10%',
        // borderColor: 'red',
        // borderWidth:2
    },
    textStyle: {
        marginHorizontal: 3, //kenar boşluğu
        fontSize: 18,
        fontWeight: 'bold',
        color: '#908f8f',
        alignSelf: 'center',

    },
    airportItem: {
        marginVertical: 10,
        marginLeft: 12
    }
});

export default OriginListScreen;
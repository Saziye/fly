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
            airports: [],
            term: '',
            arrayholder: []
        };
    }
    

    componentDidMount() {
        instance.get('/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=r&page[limit]=100').then((data) => {
            console.log('=========================DATA => ')
            console.log(data.data.data);
            this.setState({ airports: data.data.data });
            this.setState({ arrayholder: data.data.data });
        })
    }


    airportItem = ({ item }) => (
        <TouchableOpacity  style={styles.airportItem}>
            <Text> {item.name} </Text>
        </TouchableOpacity>
    );
    
    keyExtractor = (item, index) => index.toString();

    handleTextChange = (inputText) =>{
        this.setState({
            ...this.state,
            term: inputText,
        });
    }

    searchFilterFunction = (inputText) => {
        //passing the inserted text in textinput
        const newData = this.state.airports.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = inputText.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
            ...this.state,
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          arrayholder: newData,
          term: inputText,
        });        
    }
    

    render() {

        const { airports, term, arrayholder } = this.state;

        return (

            <View style={{ flex: 1 }}>

                <View style={styles.container}>
                    <Text style={styles.textStyle} >Nereden</Text>
                    <View style={{ flex: 1 }}>
                        <SearchBar
                            pholder="Şehir veya Havalimanı"
                            term = {term} 
                            edit = {true}
                            // onTermChange = {this.handleTextChange} 
                            onTermChange = {this.searchFilterFunction} 
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
                        data={arrayholder}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.airportItem}
                    />
                </View>
                {/* {console.log(term)} */}

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
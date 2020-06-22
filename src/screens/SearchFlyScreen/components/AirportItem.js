import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const YELLOW= '#f4c00f';
const WHITE = '#fff';

const AirportItem = ({way,code,airport, city, click}) => {

    return (
        <View style={styles.menuItem}>
            <TouchableOpacity onPress={click} >
                <View style={styles.wayStyle}>
                    <Text style={styles.textWay}>{way}</Text>
                </View>
                <View style= {styles.codeStyle}>
                    <Text style={styles.textCode}>{code}</Text>
                </View>
                <View style= {styles.airportStyle}>
                    <Text style={styles.textAirport}>{airport}</Text>
                </View>
                <View style= {styles.cityStyle}>
                    <Text style={styles.textCity}>{city}</Text>
                </View>
                {/* /<Text>{}</Text> */}
            </TouchableOpacity>
        </View>  
    );    
};

const styles = StyleSheet.create({
    menuItem: {
        width: '40%',
        margin: 5,
        padding:5,
        // borderColor: 'blue',
        // borderWidth:2
    },
    wayStyle: {
        margin: 3,
        // borderColor: 'red',
        // borderWidth:2
    },
    textWay: {
        fontSize: 15,
        textAlign: 'center',
        color: WHITE,
        justifyContent:'center',
    },
    codeStyle: {
        // borderColor: 'red',
        // borderWidth:2,
        //width: '50%',
        alignSelf: 'center',
    },
    textCode: {
        fontSize: 40,
        textAlign: 'center',
        color: YELLOW,
        fontWeight: 'bold',
    },
    airportStyle: {
        marginTop: 2,
        // borderColor: 'red',
        // borderWidth:2,
        
    },   
    textAirport: {
        fontSize: 12,
        textAlign: 'center',
        color: WHITE,
        
    },
    cityStyle: {
        marginTop: 0,
        marginHorizontal: 4,
        // borderColor: 'red',
        // borderWidth:2,
        
    },   
    textCity: {
        fontSize: 12,
        textAlign: 'center',
        color: WHITE,
        
    }
});

export default AirportItem;
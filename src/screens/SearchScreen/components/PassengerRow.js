import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native'

export const PassengerRow = ({ type, label, sub, count, onDecrement, onIncrement }) => (

    <View style={styles.viewStyle}>
        <Text style={ styles.labelStyle }>
            { label } { sub && (<Text style={ { fontSize: 14, color: 'gray' } }>{ sub }</Text>) }
        </Text>
        <View style={ {
            flexDirection: 'row',
            alignItems: 'center',
        } }>
            <TouchableHighlight
                underlayColor={ 'transparent' }
                onPress={ () => onDecrement(type) }>
                <Text style={ styles.textStyle }>-</Text>
            </TouchableHighlight>
            <Text style={ { margin: 10 } }>{ count }</Text>
            <TouchableHighlight
                underlayColor={ 'transparent' }
                onPress={ () => onIncrement(type) }>
                <Text style={ styles.textStyle  }>+</Text>
            </TouchableHighlight>
        </View>
    </View>
);

const styles = StyleSheet.create({
    viewStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        borderRadius: 30,
        borderColor: '#ee7621',
        backgroundColor: '#ee7621',
        padding: 5,
        marginHorizontal: 8,
        width:37,
        height:37,
        alignItems:'center',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    labelStyle: {
        color: '#53605e',
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 8,
    }
});
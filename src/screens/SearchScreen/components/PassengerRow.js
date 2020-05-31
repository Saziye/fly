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
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#FEDBA6',
        padding: 10,
        paddingTop: 7.5,
        paddingBottom: 7.5,
        marginHorizontal: 5,
        width:35,
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
    },
    labelStyle: {
        color: '#908f8f',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
//import {withNavigation } from 'react-navigation'; //navigation için

const TextItem = ({title,text,subtext}) => {

    return (
        <View style={styles.menuItem}>
            <TouchableOpacity >
                <View style={styles.titleStyle}>
                    <Text style={styles.textTitle}>{title}</Text>
                </View>
                <View style= {styles.textStyle}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style= {styles.subtextStyle}>
                    <Text style={styles.textSub}>{subtext}</Text>
                </View>
            </TouchableOpacity>
        </View>      
    );    
};

const styles = StyleSheet.create({
    menuItem: {
        width: '40%', //her satıra 2 element
        height: '40%',
        padding:5,
        borderColor: 'red',
        borderWidth:2
    },
    titleStyle: {
        margin: 3,
        borderColor: 'red',
        borderWidth:2
    },
    textStyle: {

    },
    subtextStyle: {
        
    },
    textTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'blue',
        justifyContent:'center',
        fontFamily:'Roboto'
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: 'pink',
        fontWeight: 'bold',
    },
    textSub: {
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
        
    }

});

export default TextItem;
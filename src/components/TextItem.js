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
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style= {styles.textStyle}>
                    <Text>{text}</Text>
                </View>
                <View style= {styles.subtextStyle}>
                    <Text>{subtext}</Text>
                </View>
            </TouchableOpacity>
        </View>      
    );    
};

const styles = StyleSheet.create({
    menuItem: {
        width: '40%', //her satıra 2 element
        height: '40%',
        padding:20,
        borderColor: 'red',
        borderWidth:2
    },
    titleStyle: {
       
    },
    textStyle: {

    },
    subtextStyle: {

    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: '#696969',
        // paddingLeft: 50,
        justifyContent:'center',
        fontFamily:'Roboto'
    }
});

export default TextItem;
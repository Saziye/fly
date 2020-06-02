import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
//import {withNavigation } from 'react-navigation'; //navigation için

const TextItem = ({title,text,subtext, click}) => {

    return (
        <View style={styles.menuItem}>
            <TouchableOpacity onPress={click} >
                <View style={styles.titleStyle}>
                    <Text style={styles.textTitle}>{title}</Text>
                </View>
                <View style= {styles.textStyle}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style= {styles.subtextStyle}>
                    <Text style={styles.textSub}>{subtext}</Text>
                </View>
                {/* /<Text>{}</Text> */}
            </TouchableOpacity>
        </View>  
    );    
};

const styles = StyleSheet.create({
    menuItem: {
        width: '40%',
        height: '100%',
        padding:5,
        // alignSelf: 'center',
        borderColor: 'blue',
        borderWidth:2
    },
    titleStyle: {
        margin: 3,
        borderColor: 'red',
        borderWidth:2
    },
    textStyle: {
        borderColor: 'red',
        borderWidth:2,
        //width: '50%',
        alignSelf: 'center',
        
    },
    subtextStyle: {
        margin: 4,
        borderColor: 'red',
        borderWidth:2,
        
    },
    textTitle: {
        fontSize: 15,
        textAlign: 'center',
        color: '#3ca0cd',
        justifyContent:'center',
        fontFamily:'Roboto',
        fontWeight: 'bold'
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
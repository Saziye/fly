import React from 'react';
import {
    View, 
    TextInput, 
    StyleSheet
} from 'react-native';

const SearchBar = ({icon}) => {
    return (
        <View style = {styles.backgroundStyle} >
            <TextInput 
                style = {styles.inputStyle}
                //value
                //onChangeText 
                //onEndEditing
            />
            <>{icon}</>

        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:2, //yukarıya 10 marj boşluk bırakır
        backgroundColor: 'white',
        height:45,
        borderRadius: 5,
        marginHorizontal:3, //kenar boşluğu
        flexDirection: 'row', //iconu ve textinputu yatay olarak(aynı satırda) sıralar
        borderColor: '#FEDBA6',
        borderWidth:3,
        width:190,
    },
    inputStyle: {
        flex:1, //yatay yönde mümkün oladuğunca yer kapla demek
        fontSize:18
    }
});

export default SearchBar;
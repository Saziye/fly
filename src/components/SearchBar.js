import React from 'react';
import {
    View, 
    TextInput, 
    StyleSheet
} from 'react-native';

const SearchBar = ({icon, onClick,w,pholder,edit,term, onTermChange}) => {
    return (
        <View style = {[styles.backgroundStyle, {width: w}]}>
            <TextInput 
                style = {styles.inputStyle}
                //value
                //onChangeText 
                //onEndEditing
                editable={edit}
                onFocus= {onClick}
                placeholder= {pholder}
                value = {term}
                onChangeText = {onTermChange}
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
        
    },
    inputStyle: {
        flex:1, //yatay yönde mümkün oladuğunca yer kapla demek
        fontSize:18,
        
    }
});

export default SearchBar;
import React, {Component} from 'react';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';

class SearchScreen extends Component {
    state = { }
    render() {
        return(
            <SafeAreaView forceInset= {{top: 'always'}}>
                <Text h2> Search</Text>
            </SafeAreaView>
        );
    }
}

export default SearchScreen;
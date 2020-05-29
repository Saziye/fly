import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ButtonGroup from 'react-native-button-group';
import SegmentedControlTab from 'react-native-segmented-control-tab'

class SearchScreen extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0,
        };
    }

    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }}>
                <Text h2> Search</Text>
                <SegmentedControlTab
                    values={['Tek Yön', 'Gidiş-Dönüş']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                />
            </SafeAreaView>
        );
    }
}

export default SearchScreen;
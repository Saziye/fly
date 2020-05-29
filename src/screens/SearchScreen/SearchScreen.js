import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Modal, View, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Input, Text } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import Spacer from '../../components/Spacer';
import MyDatePicker from '../../components/MyDatePicker';

class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            isDatePickerVisible: false
        };
    }

    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    showDatePicker = (visible) => {
        this.setState({
            ...this.state,
            isDatePickerVisible: visible
        });
    };

    render() {

        const  { isDatePickerVisible, selectedIndex } = this.state; 

        return (
            <SafeAreaView forceInset={{ top: 'always' }}>
                <SegmentedControlTab tabsContainerStyle={styles.segment}
                    values={['Tek Yön', 'Gidiş-Dönüş']}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    borderRadius={2}
                />
                <Spacer>
                    <Input
                        placeholder='Nereden'
                        rightIcon={<AntDesign name="down" size={20} color="#3a5fcd" />}
                        placeholderTextColor={'#3a5fcd'}
                    />
                </Spacer>
                <Spacer>
                    <Input
                        placeholder='Nereye'
                        rightIcon={<AntDesign name="down" size={20} color="#3a5fcd" />}
                        placeholderTextColor={'#3a5fcd'}
                    />
                </Spacer>
                <Spacer>
                    <TouchableOpacity onPress={()=>this.showDatePicker(true)}>
                    </TouchableOpacity>
                    <MyDatePicker/>
                </Spacer>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    segment: {
        width: 400,
        alignSelf: 'center',
    },
});

export default SearchScreen;
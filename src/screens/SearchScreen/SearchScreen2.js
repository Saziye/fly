import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import TextItem from '../../components/TextItem';

class SearchScreen2 extends Component {
    constructor(props) {
        super(props)
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
        const  { selectedIndex } = this.state; 

        return (
            <SafeAreaView forceInset= {{top: "always"}} >
                <View>
                    <SegmentedControlTab tabsContainerStyle={styles.segment}
                        values={['TEK GİDİŞ', 'GİDİŞ DÖNÜŞ']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                        borderRadius={5}
                        activeTabStyle={styles.activeTabStyle}
                        activeTabTextStyle={styles.activeTabTextStyle}
                        tabTextStyle={styles.tabTextStyle}
                        tabStyle={styles.tabStyle}
                    />
                </View>
                <View style= {styles.container_one}>
                    <TextItem title= {"Kalkış"} text = {"IST"} subtext={"Sabiha Gökçen"}/>
                    <TextItem title= {"Kalkış"} text = {"IST"} subtext={"Sabiha Gökçen"}/>
                </View>
                <View style= {styles.container_two}>
                    <TextItem title= {"Kalkış"} text = {"IST"} subtext={"Sabiha Gökçen"}/>
                    <TextItem title= {"Kalkış"} text = {"IST"} subtext={"Sabiha Gökçen"}/>
                </View>
                <View>

                </View>
            </SafeAreaView>
        );
    }
}
SearchScreen2.navigationOptions = () =>{
    return {
        headerShown:false 
    };
};

const styles = StyleSheet.create({
    segment: {
        width: '95%',
        alignSelf: 'center',
        height: 20
    },
    tabStyle: {
        borderWidth: 1,
        borderColor: '#3ca0cd',
    },  
    activeTabStyle: {
        //color: '#3ca0cd',
        backgroundColor: '#3ca0cd'
    },
    activeTabTextStyle: {
        fontSize: 13,
        color: '#363636'
    },
    tabTextStyle: {
        fontSize: 13,
        color: '#363636',
        fontWeight: "bold"
    },
    container_one: {
        //width: '50%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2
    },
    container_two: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'yellow',
        borderWidth: 2
    }
});

export default SearchScreen2;
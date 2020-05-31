import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Spacer from '../../components/Spacer';
import MyDatePicker from '../../components/MyDatePicker';
import SearchBar from './components/SearchBar';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import {Button} from 'react-native-elements';
import { Octicons } from '@expo/vector-icons';
import PassModal from './components/PassModal';
import { FontAwesome } from '@expo/vector-icons';

class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            // isDatePickerVisible: false
            modalVisible: false
        };
    }

    handleIndexChange = (index) => {   
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }

    render() {

        const  { selectedIndex, modalVisible } = this.state; 

        return (
            <SafeAreaView forceInset= {{top: "always"}} >
                <View style={{marginTop: '30%'}}>
                
                    <SegmentedControlTab tabsContainerStyle={styles.segment}
                        values={['Tek Yön', 'Gidiş-Dönüş']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                        borderRadius={5}
                        activeTabStyle={styles.activeTabStyle}
                        activeTabTextStyle={styles.activeTabTextStyle}
                        tabTextStyle={styles.tabTextStyle}
                        tabStyle={styles.tabStyle}
                    />
                    <Spacer>
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.textStyle} >Nereden</Text>
                                <SearchBar icon={<Ionicons name="md-locate" size={30} color="#FEDBA6" style={styles.iconStyle} />}/>
                            </View>
                            <View>
                                <Text style={styles.textStyle} >Nereye</Text>
                                <SearchBar icon={<Entypo name="location-pin" size={30} color="#FEDBA6" style={styles.iconStyle} />}/>
                            </View>
                        </View>
                    </Spacer>
                    <Spacer>
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.textStyle} >Gidiş Tarihi</Text>
                                <MyDatePicker date = {new Date().getDate()}/>
                            </View>
                            <View>
                                {/* {isDatePickerVisible ? <MyDatePicker/> : null} */}
                                {selectedIndex === 1 ? <Text style={styles.textStyle} >Dönüş Tarihi</Text> : null } 
                                {selectedIndex === 1 ? <MyDatePicker date = {new Date().getDate()}/> : null}
                            </View>
                            
                        </View>
                    </Spacer>
                    <Spacer>
                        <View>
                            <Text style={styles.textStyle} > Kabin </Text>
                            <Button
                                buttonStyle= {styles.button}
                                iconRight= {true}
                                icon= {<Octicons name="person" size={30} color="#FEDBA6" style= {styles.buttonIcon} />}
                                onPress={() => {
                                    this.setModalVisible(true);
                                }}
                            />
                            {modalVisible === true ? <PassModal modalVisible= {modalVisible}/> : null}
                            {console.log(modalVisible)}
                        </View>
                    </Spacer>
                    <Spacer>
                        <Button
                            buttonStyle= {styles.buttonSearch}
                            icon= {<FontAwesome name="search" size={30} color="#908f8f" />}
                            iconRight
                            // onPress={() => {
                            // }}
                        />
                    </Spacer>
                </View>
            </SafeAreaView>

        );
    }
};

SearchScreen.navigationOptions = () =>{
    return {
        headerShown:false 
    };
};

const styles = StyleSheet.create({
    segment: {
        width: 400,
        alignSelf: 'center',
    },
    iconStyle: {
        //yalnızca tek bir ögenin düzenni kontrol etmek için --> alignSelf kullanılır.
        alignSelf: 'center', //iconu center'a yerleştirir
        marginHorizontal: 8, //icon'un sağ ve sol tarafına boşluk ekler
    },
    textStyle: {
        marginHorizontal:3, //kenar boşluğu
        fontSize: 18,
        fontWeight: 'bold',
        color: '#908f8f',
        
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '20%'
    },
    tabStyle: {
        borderWidth: 2,
        borderColor: '#FEDBA6',
    },  
    activeTabStyle: {
        color: '#FEDBA6',
        backgroundColor: '#FEDBA6'
    },
    activeTabTextStyle: {
        fontSize: 18,
        color: '#908f8f'
    },
    tabTextStyle: {
        fontSize: 18,
        color: '#FEDBA6',
        fontWeight: 'bold'
    },
    button: {
        borderColor: '#FEDBA6',
        borderWidth:3,
        width:375,
        backgroundColor: 'white',
        height:45,
        borderRadius: 5,
        marginHorizontal:3,
        flexDirection: 'column',
    },
    buttonIcon: {
        alignSelf:'flex-end'
    },
    buttonSearch: {
        backgroundColor: '#FEDBA6',
        height:45,
        borderRadius: 5,
        marginHorizontal:3,
        
    }
});

export default SearchScreen;
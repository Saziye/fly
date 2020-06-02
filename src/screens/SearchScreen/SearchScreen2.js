import React, { Component } from 'react';
import { StyleSheet, View, Text , ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import TextItem from '../../components/TextItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker'
//for redux
import { connect } from "react-redux";
import { setDepartureDate, setReturnDate } from '../../actions/dateAction'


class SearchScreen2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            //departureDate: new Date().getDate(),
            //returnDate: '',
            gidis: false,
        };
    }

    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    navigateFunction = (screen) => {
        const {navigation} = this.props;
        navigation.navigate(screen);
        console.log("navigate");
    }

    // datePicker = (d) => {
    //     if(this.state.selectedIndex ===0) { //tek yön
    //         console.log("çalıştı");
    //         this.props.setDepartureDate(d);
    //         console.log("fonksiyon");
    //         console.log(this.props.depDate);
    //     } else if(selectedIndex === 1) { //gidiş dönüş
    //         this.props.setDepartureDate(d);
            
    //     }
        
    // }

    render() {
        const { selectedIndex } = this.state;
        //console.log(this.state.departureDate);
        return (
            <SafeAreaView forceInset={{ top: "always" }} >
                <ImageBackground style={styles.image} source={require('../../../assets/images/m.jpg')}>
                    <View style={styles.overlay}>
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
                        <View style={styles.container_one}>
                            <TextItem title={"Kalkış"} text={"IST"} subtext={"Sabiha Gökçen"} click={()=>this.navigateFunction("AirportsList")}/>
                            <TouchableOpacity style={styles.iconContainer}>
                                <FontAwesome5 name="exchange-alt" size={24} color="#3ca0cd" />
                            </TouchableOpacity>
                            <TextItem title={"Kalkış"} text={"IST"} subtext={"Sabiha Gökçen"} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.line}></View>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.container_two}>
                            <TextItem title={"Kalkış"} text={"IST"} subtext={"Sabiha Gökçen"} click={()=>this._date.onPressDate()}/>
                            <View style= {styles.dateIcon}>
                                <FontAwesome5 name="calendar-alt" size={26} color="#3ca0cd" />
                            </View>
                            {selectedIndex === 1
                                ? <TextItem title={"Kalkış"} text={"19"} subtext={"Haziran"} click={()=>this._date.onPressDate()}/>
                                : <TextItem title={"Kalkış"} text={<Feather name="plus" size={50} color="#ee7621" />} subtext={"Dönüş Ekle"} click={()=>this._date.onPressDate()} />
                            }

                            {/* <TextItem title= {"Kalkış"} text = {"IST"} subtext={"Sabiha Gökçen"}/> */}
                        </View>
                        {/* <View style={styles.line2}></View> */}
                        <TouchableOpacity>
                            <View style={styles.container_three}>
                                <FontAwesome5 name="user-plus" size={22} color="#3ca0cd" style={styles.icon} />
                                <Text style={styles.textYolcu}>1 yolcu- En uygun</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <View style={styles.line2}></View> */}
                        <View style={styles.container_four}>
                            <Button
                                buttonStyle={styles.buttonSearch}
                                iconRight={true}
                                icon={<Fontisto name="search" size={24} color="white" style={styles.buttonIcon} />}
                                title="UÇUŞ ARA"
                                titleStyle={styles.btnTitleStyle}
                            //    onPress={() => {
                            //        this.setModalVisible(true);
                            //    }}
                            />
                        </View>

                        <DatePicker
                            ref={(date) => this._date = date}
                            date={this.state.date}
                            mode="date" 
                            format="DD/MM/YYYY"
                            showIcon={false}
                            customStyles={{
                            dateTouchBody:{
                                display:'none',
                            }
                            }}
                            onDateChange={(date) => {
                            console.log(date)
                                //   this.setState({ date: date });
                                this.datePicker(date);
                            }}
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
SearchScreen2.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
    },
    overlay: {
        // backgroundColor:'rgba(47,163,218, .4)',
        //backgroundColor: 'rgba(0,0,0,.6)',
        backgroundColor: 'rgba(255,255,255, .4)',
        height: '100%',
        width: '100%',
        // borderColor: 'purple',
        // borderWidth:2
    },
    segment: {
        width: '95%',
        alignSelf: 'center',
        height: 23,
        marginTop: 10,
        marginBottom: 10
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
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 10,
        //borderColor: 'red',
        //borderWidth: 2
    },
    iconContainer: {
        alignSelf: 'center',
        marginTop: '50%',
        padding: '7%',
        //borderColor: 'yellow',
        //borderWidth: 2
    },
    dateIcon: {
        alignSelf: 'center',
        margin: '5%',
        padding: '2%',
        //borderColor: 'yellow',
        //borderWidth: 2
    },
    line: {
        width: '38%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
    line2: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        //marginVertical: 5
    },
    container_two: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 10,
        //borderColor: 'yellow',
        //borderWidth: 2
    },
    container_three: {
        justifyContent: 'center',
        flexDirection: 'row',
        //alignItems: 'stretch',
        margin: 10,
        //borderColor: 'pink',
        //borderWidth: 2
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 8,
        //borderColor: 'pink',
        //borderWidth: 2
    },
    plusIcon: {

    },
    textYolcu: {
        alignSelf: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#3ca0cd',
        //borderColor: 'pink',
        //borderWidth: 2
    },
    container_four: {
        width: '80%',
        alignSelf: 'center',
        //borderColor: 'pink',
        //borderWidth: 2
    },
    buttonSearch: {
        backgroundColor: '#ee7621',
        height: 35,
    },
    buttonIcon: {
        margin: 8,
        alignSelf: 'center'
    },
    btnTitleStyle: {
        fontWeight: 'normal',
        fontFamily: 'sans-serif-medium',
        fontSize: 17
    }
});

const mapStateToProps = (state) => {
    return {
        depDate: state.date.departureDate
    };
};
  
  const mapDispatchToProps = () => {
    return {
        setDepartureDate
    };
};
  
export default connect(mapStateToProps,mapDispatchToProps())(SearchScreen2);
  


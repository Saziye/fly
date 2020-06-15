import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Tabs, Tab, Icon } from "react-native-elements";
import Airline from './components/Airline';
import { AntDesign } from "@expo/vector-icons";

class FilterScreen extends Component {
  State;
  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'profile'
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Filtreler",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
      alignSelf: "center",
      textAlign: "center",
    },
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16416c",
    },
    headerRight: (
      <View>
        <Text style={styles.hStyle}>Uygula</Text>
      </View>
    ),
    headerLeft: (
      <View style={{ marginLeft: 15 }}>
        <AntDesign
          name="left"
          size={32}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    ),
  });

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render() {
    const { selectedTab } = this.state;

    return (
        <Tabs>
        {/* <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'feed'}
          title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
          onPress={() => this.changeTab('feed')}>
          <Airline/>
         
        </Tab>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'profile'}
          title={selectedTab === 'profile' ? 'PROFILE' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
          onPress={() => this.changeTab('profile')}>
          <Airline/>
        </Tab> */}

      </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  hStyle: {
    color: "white",
    marginRight: 15,
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    textAlign: "center",
  },
});

export default FilterScreen;

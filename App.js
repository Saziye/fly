import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';

const switchNavigator = createStackNavigator({
    Search: SearchScreen,  
},
{
  initialRouteName: 'Search',
}
);

const App =  createAppContainer(switchNavigator);

export default () => {
  return (
    <App/>
  );
};
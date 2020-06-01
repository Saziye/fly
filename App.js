import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createAppContainer,
} from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import OriginListScreen from './src/screens/OriginListScreen/OriginListScreen';


const switchNavigator = createStackNavigator({
    Search: SearchScreen,
    OriginList: OriginListScreen  
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
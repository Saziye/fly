import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createAppContainer,
} from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import OriginListScreen from './src/screens/OriginListScreen/OriginListScreen';
import thunkMiddleware from "redux-thunk";
import {
  Provider
} from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import reducers from "./src/reducers";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleware
      // loggerMiddleware
    )
  )
);
console.log(store.getState());
const switchNavigator = createStackNavigator({
    Search: SearchScreen,
    OriginList: OriginListScreen,  
},
{
  initialRouteName: 'Search',
}
);

const App =  createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};
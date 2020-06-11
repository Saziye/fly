import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createAppContainer,
} from 'react-navigation';
import SearchScreen2 from './src/screens/SearchScreen/SearchScreen2';
import AirportsListScreen from './src/screens/AirportsListScreen/AirportsListScreen';
import SearchFlyScreen from './src/screens/SearchFlyScreen/SearchFlyScreen';
import PassengerScreen from './src/screens/PassengerScreen/PassengerScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen/SearchResultsScreen';
import thunkMiddleware from "redux-thunk";
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;
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
    Search2: SearchScreen2,
    AirportsList: AirportsListScreen, 
    SearchFly: SearchFlyScreen,
    Passenger: PassengerScreen,
    SearchResults: SearchResultsScreen,
},
{
  initialRouteName: 'SearchFly',
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
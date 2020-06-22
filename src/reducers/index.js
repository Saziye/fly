import { combineReducers } from 'redux';
import airport from './airport';
import date from './date';
import passenger from './passenger';


const appReducer = combineReducers({
    airport,
    date,
    passenger

});
const rootReducer = (state, action) => {   
  // Clear all data in redux store to initial.
  return appReducer(state, action);
};
export default rootReducer;


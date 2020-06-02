import { combineReducers } from 'redux';
import airport from './airport';
import date from './date';



const appReducer = combineReducers({
    airport,
    date

});
const rootReducer = (state, action) => {   
  // Clear all data in redux store to initial.
  return appReducer(state, action);
};
export default rootReducer;


import { combineReducers } from 'redux';
import airport from './airport';



const appReducer = combineReducers({
    airport,

});
const rootReducer = (state, action) => {   
  // Clear all data in redux store to initial.
  return appReducer(state, action);
};
export default rootReducer;


import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tableReducer from './tableReducer';
import menuReducer from './menuReducer';

export default combineReducers({
  auth: authReducer,
  table: tableReducer,
  menu: menuReducer
});

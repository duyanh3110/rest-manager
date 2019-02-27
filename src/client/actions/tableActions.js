import axios from 'axios';
import {
  GET_TABLE_LIST, TABLE_LOADING, CLEAR_CURRENT_TABLE, GET_ERRORS
} from './types';

export const getCurrentTable = () => (dispatch) => {
  dispatch(setTableLoading());
  axios
    .get('/api/table/showtable')
    .then(res => dispatch({
      type: GET_TABLE_LIST,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_TABLE_LIST,
      payload: {}
    }));
};

// Table loading
export const setTableLoading = () => ({
  type: TABLE_LOADING
});

// Clear Table
export const clearCurrentFood = () => ({
  type: CLEAR_CURRENT_TABLE
});

// add customer
export const addcustomer = (tableData,history) => (dispatch) => {
  axios
    .post('/api/table/addcustomer', tableData)
    .then((res) => {
      history.push('/categories');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

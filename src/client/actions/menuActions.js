import axios from 'axios';
import {
  GET_MENU_LIST, MENU_LOADING, CLEAR_CURRENT_MENU, GET_ERRORS
} from './types';

export const getCurrentMenu = () => (dispatch) => {
  dispatch(setMenuLoading());
  axios
    .get('/api/menu/showmenu')
    .then(res => dispatch({
      type: GET_MENU_LIST,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_MENU_LIST,
      payload: {}
    }));
};

// Menu loading
export const setMenuLoading = () => ({
  type: MENU_LOADING
});

// Clear Menu
export const clearCurrentMenu = () => ({
  type: CLEAR_CURRENT_MENU
});

// add customer
export const addfood = (foodData, history) => (dispatch) => {
  axios
    .post('/api/menu/add', foodData)
    .then((res) => {
      history.push('/setting');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

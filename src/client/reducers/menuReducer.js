import { GET_MENU_LIST, MENU_LOADING, CLEAR_CURRENT_MENU } from '../actions/types';

const initialState = {
  menu: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MENU_LIST:
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_MENU:
      return {
        ...state,
        menu: null
      };
    default:
      return state;
  }
}

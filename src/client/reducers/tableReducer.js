import { GET_TABLE_LIST, TABLE_LOADING, CLEAR_CURRENT_TABLE } from '../actions/types';

const initialState = {
  table: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TABLE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TABLE_LIST:
      return {
        ...state,
        table: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_TABLE:
      return {
        ...state,
        table: null
      };
    default:
      return state;
  }
}

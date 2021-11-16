import {
  GET_ALL_ORDERS_FAIL,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  SINGLE_ORDER_DETAILS_FAIL,
  SINGLE_ORDER_DETAILS_REQUEST,
  SINGLE_ORDER_DETAILS_SUCCESS,
  SHOW_USER_ORDERS_FAIL,
  SHOW_USER_ORDERS_REQUEST,
  SHOW_USER_ORDERS_SUCCESS,
} from '../actions';

const orderReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
      return { ...state, order_loading: true };
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        order_loading: false,
        order_error: false,
        orders: action.payload,
      };
    case GET_ALL_ORDERS_FAIL:
      return { ...state, order_loading: false, order_error: true };

    case SINGLE_ORDER_DETAILS_REQUEST:
      return { ...state, single_order_loading: true };
    case SINGLE_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        single_order_loading: false,
        single_order_error: false,
        single_order: action.payload,
      };
    case SINGLE_ORDER_DETAILS_FAIL:
      return {
        ...state,
        single_order_loading: false,
        single_order_error: true,
      };
    case SHOW_USER_ORDERS_REQUEST:
      return { ...state };
    case SHOW_USER_ORDERS_SUCCESS:
      return { ...state, my_orders_loading: true };
    case SHOW_USER_ORDERS_SUCCESS:
      return { ...state, my_orders_loading: false, my_order: action.payload };
    case SHOW_USER_ORDERS_FAIL:
      return { ...state, my_orders_loading: false, my_orders_error: true };
    default:
      return state;
  }
};

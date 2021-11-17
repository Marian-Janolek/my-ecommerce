import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducer/orderReducer';
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
import { orders_url } from '../utils/constants';

const initialState = {
  orders_loading: false,
  orders_error: false,
  orders: [],
  single_order_loading: false,
  single_order_error: false,
  single_order: {},
  my_orders_loading: false,
  my_orders_error: false,
  my_orders: [],
};

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allOrders = async () => {
    dispatch({ type: GET_ALL_ORDERS_REQUEST });
    try {
      const response = await axios.get(orders_url);
      const orders = response.data;
      dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({ type: GET_ALL_ORDERS_FAIL });
    }
  };

  const singleOrder = async (id) => {
    dispatch({ type: SINGLE_ORDER_DETAILS_REQUEST });
    try {
      const response = await axios.get(`${orders_url}/${id}`);
      const order = response.data;
      dispatch({ type: SINGLE_ORDER_DETAILS_SUCCESS, payload: order });
    } catch (error) {
      dispatch({ type: SINGLE_ORDER_DETAILS_FAIL });
    }
  };

  const showMyOrders = async () => {
    try {
      dispatch({ type: SHOW_USER_ORDERS_REQUEST });
      const response = await axios.get(`${orders_url}/showAllMyOrders`);
      const myOrders = response.data;
      dispatch({ type: SHOW_USER_ORDERS_SUCCESS, payload: myOrders });
    } catch (error) {
      dispatch({ type: SHOW_USER_ORDERS_FAIL });
    }
  };

  return (
    <OrderContext.Provider
      value={{ ...state, allOrders, singleOrder, showMyOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};

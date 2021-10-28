import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducer/cartReducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
} from '../actions';

const initialState = {
  total_items: 0,
  total_amount: 0,
  shipping_fee: 3.99,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, payload });
  };
  const removeItem = () => {
    dispatch({ type: REMOVE_CART_ITEM, payload });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART, payload });
  };
  const toggleAmount = () => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload });
  };

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

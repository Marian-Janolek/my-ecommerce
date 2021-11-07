import React, { useState, useEffect, useContext } from 'react';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../actions';

const initialState = {
  myUser: {},
  user_loading: false,
  user_error: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  cconst[(state, dispatch)] = useReducer(reducer, initialState);

  useEffect(() => {
    setMyUser(myUser);
  }, [myUser]);

  const register = ({ myUser }) => {
    dispatch({ type: USER_REGISTER_REQUEST });
  };
  const login = () => {};
  const logout = () => {};

  return (
    <UserContext.Provider value={{ ...state, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

import axios from 'axios';
import React, { useEffect, useContext, useReducer } from 'react';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../actions';
import reducer from '../reducer/userReducer';

const initialState = {
  myUser: {},
  user_loading: false,
  user_error: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const register = async ({ myUser }) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
      const url = `/api/v1/auth/register`;

      const user = await axios.post(url, myUser, config);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL });
    }
  };

  const login = async ({ myUser }) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
      const url = `/api/v1/auth/login`;

      const user = await axios.post(url, myUser, config);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAIL });
    }
  };

  const logout = async () => {
    try {
      const url = `/api/v1/auth/logout`;
      await axios.get(url);
      dispatch({ type: USER_LOGOUT });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

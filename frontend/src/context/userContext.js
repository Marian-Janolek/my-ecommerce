import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_CREDENTIALS_REQUEST,
  USER_UPDATE_CREDENTIALS_SUCCESS,
  USER_UPDATE_CREDENTIALS_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_FAIL,
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

      const user = await axios.post(url, myUser);
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

  const updateCredentials = async ({ myUser }) => {
    dispatch({ type: USER_UPDATE_CREDENTIALS_REQUEST });
    try {
      const url = `/api/v1/users/updateUser`;
      const user = await axios.patch(url, myUser);
      dispatch({ type: USER_UPDATE_CREDENTIALS_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: USER_UPDATE_CREDENTIALS_FAIL });
    }
  };

  const updatePassword = async ({ myUser }) => {
    dispatch({ type: USER_UPDATE_PASSWORD_REQUEST });
    try {
      const url = `/api/v1/users/updateUserPassword`;
      const user = await axios.patch(url, myUser);
      dispatch({ type: USER_UPDATE_PASSWORD_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: USER_UPDATE_PASSWORD_FAIL });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        register,
        login,
        logout,
        updateCredentials,
        updatePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

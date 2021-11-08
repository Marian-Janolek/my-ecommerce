import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_UPDATE_CREDENTIALS_REQUEST,
  USER_UPDATE_CREDENTIALS_SUCCESS,
  USER_UPDATE_CREDENTIALS_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_FAIL,
} from '../actions';

const user_reducer = (state, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, user_loading: true, user_error: false };
    case USER_REGISTER_SUCCESS:
      return { ...state, user_loading: false, myUser: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state, user_loading: false, user_error: true };
    case USER_LOGIN_REQUEST:
      return { ...state, user_loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, user_loading: false, myUser: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, user_loading: false, user_error: true };
    case USER_LOGOUT:
      return {};
    case USER_UPDATE_CREDENTIALS_REQUEST:
      return { ...state, user_loading: true };
    case USER_UPDATE_CREDENTIALS_SUCCESS:
      return {
        ...state,
        user_loading: false,
        user_error: false,
        myUser: action.payload,
      };
    case USER_UPDATE_CREDENTIALS_FAIL:
      return { ...state, user_error: true };
    case USER_UPDATE_PASSWORD_REQUEST:
      return { ...state, user_loading: true };
    case USER_UPDATE_PASSWORD_SUCCESS:
      return { ...state, user_loading: false, myUser: action.payload };
    case USER_UPDATE_PASSWORD_FAIL:
      return { ...state, user_error: true };
    default:
      return state;
  }
};

export default user_reducer;

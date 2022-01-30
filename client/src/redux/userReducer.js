import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  PROFILE,
  PROFILE_FAIL,
  PROFILE_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
} from "./userActionType";

let init = {
  users: null,
  loading: false,
  error: null,
  token: localStorage.getItem("token"),
  isAuth: false,
  isAdmin: null,
};

export const userReducer = (state = init, { payload, type }) => {
  switch (type) {
    case SIGN_UP:
    case LOGIN:
    case PROFILE:
    case GET_USER:
    case ADD_USER:
    case DELETE_USER:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };

    case SIGN_UP_FAIL:
    case LOGIN_FAIL:
    case PROFILE_FAIL:
    case GET_USER_FAIL:
    case ADD_USER_FAIL:
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload.theUser,
        token: payload.token,
        isAuth: true,
        errors: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        isAuth: true,
        errors: null,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, payload],
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((el) => el._id !== payload),
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        users: null,
        token: null,
      };

    default:
      return state;
  }
};

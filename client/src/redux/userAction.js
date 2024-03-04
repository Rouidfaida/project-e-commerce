import { Axios } from "../config";
import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  PROFILE,
  PROFILE_FAIL,
  PROFILE_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from "./userActionType";

export const signUpUser = (newUser) => async (dispatch) => {
  dispatch({
    type: SIGN_UP,
  });
  try {
    let res = await Axios.post("/user/signUp", newUser);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error.response.data,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    let res = await Axios.post("/user/login", user);
    localStorage?.setItem("token", res?.data?.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
    payload: null,
  };
};
export const profileUser = () => async (dispatch) => {
  dispatch({
    type: PROFILE,
  });
  let token = localStorage.setItem("token");
  let config = {
    Headers: {
      Authorization: token,
    },
  };
  try {
    let res = await Axios.get("/user/get", config);
    dispatch({
      type: PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
export const getUsers = () => async (dispatch) => {
  dispatch({
    type: GET_USER,
  });

  try {
    let res = await Axios.get("/user/getUsersList");
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response.data,
    });
  }
};
// //add manager
// export const addManers = (newUser) => async (dispatch) => {
//     dispatch({ type: ADD_USER });
//     let token = localStorage.getItem("token");
//     let config = {
//       headers: {
//           Authorization: token,
//       }
//     };
//     try {
//       const res = await Axios.post("/user/addManager",newUser,config);

//       dispatch({
//         type: ADD_USER_SUCCESS,
//         payload: res.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: ADD_USER_FAIL,
//         payload: error.response.data,
//       });
//     }
//   };
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USER });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await Axios.delete(`/user/deleteManager/${id}`, config);

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data,
    });
  }
};

import axios from "axios";
import {
  CATEGORIE_ADD,
  CATEGORIE_ADD_FAIL,
  CATEGORIE_ADD_SUCCESS,
  CATEGORIE_DELETE,
  CATEGORIE_DELETE_FAIL,
  CATEGORIE_DELETE_SUCCESS,
  CATEGORIE_GET,
  CATEGORIE_GET_FAIL,
  CATEGORIE_GET_SUCCESS,
  CATEGORIE_UPDATE,
  CATEGORIE_UPDATE_FAIL,
  CATEGORIE_UPDATE_SUCCESS,
} from "./categorieActionType";

export const getCategorielist = () => async (dispatch) => {
  dispatch({
    type: CATEGORIE_GET,
  });
  try {
    let res = await axios.get("/categorie/getCategorie");
    dispatch({
      type: CATEGORIE_GET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIE_GET_FAIL,
      payload: error.response.data,
    });
  }
};
export const AddCategorielist = (newCategorie) => async (dispatch) => {
  dispatch({
    type: CATEGORIE_ADD,
  });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.post(
      "/categorie/postCategorie",
      newCategorie,
      config
    );
    dispatch({
      type: CATEGORIE_ADD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIE_ADD_FAIL,
      payload: error.response.data,
    });
  }
};
export const editCategorie =
  (id, name) =>
  async (dispatch) => {
    dispatch({ type: CATEGORIE_UPDATE });
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
      },
    };
    let newCategorie = {
      id,
     name
    };

    try {
      const res = await axios.put(
        `/categorie/putCategorie/${id}`,
        newCategorie,
        config
      );

      dispatch({
        type: CATEGORIE_UPDATE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CATEGORIE_UPDATE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteCategorie = (id) => async (dispatch) => {
  dispatch({ type: CATEGORIE_DELETE });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.delete(`/categorie/deleteCategorie/${id}`, config);

    dispatch({
      type: CATEGORIE_DELETE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIE_DELETE_FAIL,
      payload: error.response.data,
    });
  }
};

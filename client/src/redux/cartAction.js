// import { Axios } from '../../../config';
import { Axios } from "../config";
import {
  ADD_ITEM,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_FAIL,
  ADD_PRODUCT_TO_CART_SUCCESS,
  DELETE_ITEM,
  VIDER_CART,
} from "./cartActionType";

export const addProductsCart = (newcommande) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_TO_CART });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await Axios.post("/commande/newCommande", newcommande, config);

    dispatch({
      type: ADD_PRODUCT_TO_CART_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_TO_CART_FAIL,
      payload: error.response.data,
    });
  }
};

export const handelDelete = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};
export const videCart = () => (dispatch) => {
  dispatch({
    type: VIDER_CART,
  });
};

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const res = await Axios.get(`/product/getProductById/${id}`);
  dispatch({
    type: ADD_ITEM,
    payload: {
      id: res.data._id,
      title: res.data.title,
      price: res.data.price,
      imageUrl: res.data.imageUrl,
      quantityStock: res.data.quantityStock,
      qty,
    },
  });
};

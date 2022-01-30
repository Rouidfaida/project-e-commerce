import axios from "axios";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  PRODUCT_FILTER,
  PRODUCT_GET,
  PRODUCT_GET_FAIL,
  PRODUCT_GET_ID,
  PRODUCT_GET_ID_FAIL,
  PRODUCT_GET_ID_SUCCESS,
  PRODUCT_GET_SUCCESS,
} from "./productActionType";

export const getProductlist = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_GET,
  });
  try {
    let res = await axios.get("/product/getProduct");
    dispatch({
      type: PRODUCT_GET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_GET_FAIL,
      payload: error.response.data,
    });
  }
};
// export const getProductId=(id)=>async(dispatch)=>{
// dispatch({
//     type:PRODUCT_GET_ID
// })
// try {
//   const res = await axios.get(`/product/getProductById/${id}`)
//   console.log(res)
//     dispatch({
//         type:PRODUCT_GET_ID_SUCCESS,
//         payload:res.data,
//     })
// } catch (error) {
//    dispatch({
//        type:PRODUCT_GET_ID_FAIL,
//        payload:error.response.data
//     })
// }
// }

export const filterProduct = (categorifilter) => async (dispatch) => {
  dispatch({
    type: PRODUCT_FILTER,
    payload: categorifilter,
  });
};
export const addProduct = (newproduct) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const res = await axios.post("/product/postProduct", newproduct, config);

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};
export const editProduct = (id, newproduct) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const res = await axios.put(
      `/product/putProduct/${id}`,
      newproduct,
      config
    );

    dispatch({
      type: EDIT_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.delete(`/product/deletProduct/${id}`, config);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

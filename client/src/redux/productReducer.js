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

let initial = {
  products: null,
  error: null,
  loading: false,
  token: localStorage.getItem("token"),
  isAuth: false,
  categorySelected: "all",
};
export const productReducer = (state = initial, { payload, type }) => {
  switch (type) {
    case PRODUCT_GET:
    case ADD_PRODUCT:
    case EDIT_PRODUCT:
    case DELETE_PRODUCT:
    case PRODUCT_GET_ID:
      return { ...state, loading: true };
    case PRODUCT_GET_FAIL:
    case ADD_PRODUCT_FAIL:
    case EDIT_PRODUCT_FAIL:
    case DELETE_PRODUCT_FAIL:
    case PRODUCT_GET_ID_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case PRODUCT_GET_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],

        isAuth: true,
        errors: null,
      };
    case PRODUCT_GET_ID_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.map((el) =>
          el._id == payload ? { ...el, ...payload } : el
        ),
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products?.filter((el) => el._id !== payload),
      };

    case PRODUCT_FILTER:
      return {
        ...state,
        loading: false,
        categorySelected: payload,
      };
    default:
      return state;
  }
};

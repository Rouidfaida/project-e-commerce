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

let init = {
  categories: [],
  loading: false,
  error: null,
};
export const categorieReducer = (state = init, { payload, type }) => {
  switch (type) {
    case CATEGORIE_GET:
    case CATEGORIE_ADD:
    case CATEGORIE_DELETE:
    case CATEGORIE_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIE_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case CATEGORIE_GET_FAIL:
    case CATEGORIE_ADD_FAIL:
    case CATEGORIE_UPDATE_FAIL:
    case CATEGORIE_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CATEGORIE_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, payload],

        errors: null,
      };
    case CATEGORIE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: state.categories.map((el) =>
          el._id == payload ? { ...el, ...payload } : el
        ),
      };
    case CATEGORIE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: state.categories.filter((el) => el._id !== payload),
      };

    default:
      return state;
  }
};

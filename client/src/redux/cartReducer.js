import {
  ADD_ITEM,
  ADD_ITEM_FAIL,
  ADD_ITEM_SUCCESS,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_FAIL,
  ADD_PRODUCT_TO_CART_SUCCESS,
  DELETE_ITEM,
  VIDER_CART,
} from "./cartActionType";

let initial = {
  commande: null,

  cartItems: [],
};
export const commandeReducer = (state = initial, { payload, type }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, loading: true };
    case ADD_PRODUCT_TO_CART_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        commande: payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems?.filter((x) => x.id !== payload),
      };

    case VIDER_CART:
      return {
        ...state,
        cartItems: [],
      };

    case ADD_ITEM:
      const item = payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};

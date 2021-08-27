import { types } from "../types/types";

const initialState = {
  cart: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartAddNew:
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      };

    case types.cartLoad:
      return {
        ...state,
        cart: [...action.payload]
      };


    default:
      return state;
  }
}
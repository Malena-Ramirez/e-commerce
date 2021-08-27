import { db } from "../firebase/firebaseConfig";
import { types } from '../types/types';

export const cartAction = (quantity, product) => {
  return async (dispatch) => {

    const newProduct = {
      quantity,
      product,
    }

    await db.collection(`/cart`).add(newProduct);
  }
}

export const setCartProducts = (products) => {
  return {
    type: types.cartLoad,
    payload: products
  }
}

export const loadCartAction = () => {
  return async (dispatch) => {
    const productsFirebase = await db.collection('/cart').get();
    const products = [];
    productsFirebase.forEach(element => {
      products.push({
        id: element.id,
        ...element.data()
      })
    });
    dispatch(setCartProducts(products));

  }
}
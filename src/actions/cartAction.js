import { db } from "../firebase/firebaseConfig";
import { types } from '../types/types';

export const setCartProducts = (products) => {
  return {
    type: types.cartLoad,
    payload: products
  }
}

export const loadCartAction = () => {
  return async (dispatch, getState) => {
    const productsFirebase = await db.collection('/cart').get();
    const products = [];
    productsFirebase.forEach(element => {
      products.push({
        id: element.id,
        ...element.data()
      })
    });

    const { id } = getState().login;
    const userProducts = products.filter(product => product.userId === id)

    dispatch(setCartProducts(userProducts));
  }
}

export const cartAction = (quantity, product) => {
  return async (dispatch, getState) => {
    const { id } = getState().login;
    const newProduct = {
      quantity,
      product,
      userId: id
    }

    await db.collection(`/cart`).add(newProduct);
    dispatch(loadCartAction());
  }
}
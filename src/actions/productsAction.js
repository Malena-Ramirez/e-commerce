import { db } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const setProducts = (products) => {
  return {
    type: types.productsLoad,
    payload: products
  }
}

export const loadProductsAction = () => {
  return async (dispatch) => {
    const productsFirebase = await db.collection('/products').get();
    const products = [];
    productsFirebase.forEach(element => {
      products.push({
        id: element.id,
        ...element.data()
      })
    });
    dispatch(setProducts(products));

  }
}
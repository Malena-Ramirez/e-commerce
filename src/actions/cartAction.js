import Swal from "sweetalert2";
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

export const updateCart = (productInfo, quantity) => {
  return async (dispatch) => {
    const { id, ...cartToFirestore } = productInfo;
    cartToFirestore.quantity = quantity;

    await db.doc(`/cart/${id}`).update(cartToFirestore);

    dispatch(loadCartAction());
  }
}

export const deleteProduct = (id) => ({
  type: types.cartProductDelete,
  payload: id
})

export const startDeleting = (id) => {
  return async (dispatch) => {
    await Swal.fire({
      title: '¿Desea eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado',
          text: 'El producto ha sido eliminado exitosamente.',
          icon: 'success',
        }
        );
        db.doc(`/cart/${id}`).delete();

        dispatch(deleteProduct(id));
        dispatch(loadCartAction());
      }
    })
  }
}
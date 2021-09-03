import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startDeleting, updateCart } from '../../actions/cartAction';
import {
  CartIcon,
  ProductImgContainer,
  ProductRow,
} from './ShoppingCartStyled';

const ShoppingCartRow = ({ productInfo }) => {
  const [updateQuantity, setUpdateQuantity] = useState(productInfo.quantity);
  const subtotal =
    parseFloat(productInfo.product.price) * parseInt(updateQuantity);

  const dispatch = useDispatch();

  const handleSubstract = () => {
    if (parseInt(updateQuantity) > 1) {
      const modifiedQuantity = updateQuantity - 1;
      setUpdateQuantity(modifiedQuantity);
      dispatch(updateCart(productInfo, modifiedQuantity));
    }
  };

  const handleAdd = () => {
    const modifiedQuantity = updateQuantity + 1;
    setUpdateQuantity(modifiedQuantity);
    dispatch(updateCart(productInfo, modifiedQuantity));
  };

  const handleDeleteProduct = (id) => {
    dispatch(startDeleting(id));
  };

  return (
    <ProductRow>
      <ProductImgContainer>
        <figcaption>{productInfo.product.name}</figcaption>
        <img
          className='img-fluid'
          src={productInfo.product.image}
          alt={productInfo.product.name}
        />
      </ProductImgContainer>
      <p>
        <CartIcon
          className='bi bi-dash-circle me-2'
          onClick={handleSubstract}
        ></CartIcon>
        {updateQuantity}
        <CartIcon
          className='bi bi-plus-circle ms-2'
          onClick={handleAdd}
        ></CartIcon>
      </p>
      <p>$ {productInfo.product.price}</p>
      <p>
        $ {subtotal}{' '}
        <CartIcon
          className='bi bi-x-circle'
          onClick={() => handleDeleteProduct(productInfo.id)}
        ></CartIcon>
      </p>
    </ProductRow>
  );
};

export default ShoppingCartRow;

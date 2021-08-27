import React from 'react';
import { ProductImgContainer, ProductRow } from './ShoppingCartStyled';

const ShoppingCartRow = ({ product, quantity }) => {
  const subtotal = parseInt(product.price) * parseInt(quantity);
  return (
    <ProductRow>
      <ProductImgContainer>
        <figcaption>{product.name}</figcaption>
        <img className='img-fluid' src={product.image} alt={product.name} />
      </ProductImgContainer>
      <p>{quantity}</p>
      <p>$ {product.price}</p>
      <p>$ {subtotal}</p>
    </ProductRow>
  );
};

export default ShoppingCartRow;

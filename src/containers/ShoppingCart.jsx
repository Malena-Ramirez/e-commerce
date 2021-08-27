import React from 'react';
import {
  ProductImgContainer,
  ProductRow,
  ShoppingCartContainer,
  Tags,
  Total1,
  Total2,
  TotalToPayText,
} from '../components/ShoppingCart/ShoppingCartStyled';

const ShoppingCart = () => {
  return (
    <ShoppingCartContainer className='container'>
      <section>
        <Tags>
          <p>Producto</p>
          <p>Cantidad</p>
          <p>Precio</p>
          <p>Subtotal</p>
        </Tags>
        <ProductRow>
          <ProductImgContainer>
            <figcaption>Producto 1</figcaption>
            <img
              class='img-fluid'
              src='https://i.imgur.com/JbU3GOV.jpg'
              alt=''
            />
          </ProductImgContainer>
          <p>1</p>
          <p>$100.000</p>
          <p>$100.000</p>
        </ProductRow>
      </section>
      <section>
        <TotalToPayText>
          <Total1>Total</Total1>
          <Total2>$100.000</Total2>
        </TotalToPayText>
        <div class='button d-md-flex justify-content-md-end'>
          <button type='button' class='btn btn-primary btn-lg'>
            Pagar
          </button>
        </div>
      </section>
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;

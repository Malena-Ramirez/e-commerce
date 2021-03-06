import React, { useEffect, useState } from 'react';
import ShoppingCartRow from '../components/ShoppingCart/ShoppingCartRow';
import { useSelector } from 'react-redux';
import {
  ShoppingCartContainer,
  Tags,
  Total1,
  Total2,
  TotalToPayText,
} from '../components/ShoppingCart/ShoppingCartStyled';

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((element) => {
      sum += element.quantity * element.product.price;
    });
    setTotal(sum);
  }, [cart]);

  return (
    <ShoppingCartContainer className='container'>
      {cart.length > 0 ? (
        <>
          <section>
            <Tags>
              <p>Producto</p>
              <p>Cantidad</p>
              <p>Precio</p>
              <p>Subtotal</p>
            </Tags>
            {cart.map((element) => (
              <ShoppingCartRow
                key={element.id}
                productInfo={element}
                quantity={element.quantity}
                id={element.id}
              />
            ))}
          </section>
          <section>
            <TotalToPayText>
              <Total1>Total</Total1>
              <Total2>$ {total.toFixed(2)}</Total2>
            </TotalToPayText>
            <div className='button d-md-flex justify-content-md-end'>
              <button type='button' className='btn btn-primary btn-lg'>
                Pagar
              </button>
            </div>
          </section>
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;

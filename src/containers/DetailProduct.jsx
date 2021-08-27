import React from 'react';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import {
  DetailProductContainer,
  ImgProduct,
  QuantityInput,
  ProductDescription,
  ProductInfo,
  AddButton,
} from '../components/DetailProducts/DetailProductStyled';
import { cartAction } from '../actions/cartAction';
import Swal from 'sweetalert2';

const DetailProduct = (props) => {
  const { product } = props.location.state;

  const [formValues, handleInputChange, reset] = useForm({
    quantity: 1,
  });

  const { quantity } = formValues;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cartAction(quantity, product));
    Swal.fire({
      title: 'Agregado',
      text: 'El producto ha sido agregado exitosamente.',
      icon: 'success',
    });
    reset();
  };

  return (
    <DetailProductContainer className='container'>
      <div className='row'>
        <section className='col-6'>
          <figure>
            <ImgProduct
              className='float-end'
              src={product.image}
              alt={product.name}
            />
          </figure>
        </section>
        <ProductInfo className='col-6 d-flex align-items-center'>
          <div>
            <h1>{product.name}</h1>
            <p className='fs-4'>$ {product.price}</p>
            <ProductDescription className='product-text'>
              {product.description}
            </ProductDescription>
            <div className='input-group'>
              <QuantityInput
                type='number'
                name='quantity'
                id='quantity'
                min='1'
                value={quantity}
                onChange={handleInputChange}
                className='input-group-text'
              />
              <form onSubmit={handleSubmit}>
                <AddButton type='submit' className='btn btn-primary btn-lg'>
                  Agregar al carrito
                </AddButton>
              </form>
            </div>
          </div>
        </ProductInfo>
      </div>
    </DetailProductContainer>
  );
};

export default DetailProduct;

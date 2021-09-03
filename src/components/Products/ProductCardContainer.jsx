import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from './Products';

const ProductCardContainer = ({ product }) => {
  return (
    <div className='col'>
      <ProductCard className='card h-100'>
        <Link
          to={{ pathname: '/detalle-producto', state: { product: product } }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <img
            src={product.image}
            className='card-img-top'
            alt='Imagen de producto'
          />
          <div className='card-body'>
            <h3 className='card-title'>{product.title}</h3>
            <p className='card-text'>$ {product.price}</p>
          </div>
        </Link>
      </ProductCard>
    </div>
  );
};

export default ProductCardContainer;

import React from 'react';
import AsideCategories from '../components/Products/AsideCategories';
import {
  ProductCard,
  ProductsContainer,
  ProductsList,
} from '../components/Products/Products';

const Products = () => {
  return (
    <ProductsContainer>
      <div className='row'>
        <AsideCategories />

        <ProductsList className='col-8 row row-cols-1 row-cols-md-3 g-5 text-center'>
          <div className='col'>
            <ProductCard className='card'>
              <a href='detalle_producto.html'>
                <img
                  src='https://i.imgur.com/JbU3GOV.jpg'
                  className='card-img-top'
                  alt='Imagen producto de categoría de mujeres'
                />
                <div className='card-body'>
                  <h3 className='card-title'>Producto 1</h3>
                  <p className='card-text'>$100.000</p>
                </div>
              </a>
            </ProductCard>
          </div>
          <div className='col'>
            <ProductCard className='card'>
              <a href='detalle_producto.html'>
                <img
                  src='https://i.imgur.com/JbU3GOV.jpg'
                  className='card-img-top'
                  alt='Imagen producto de categoría de mujeres'
                />
                <div className='card-body'>
                  <h3 className='card-title'>Producto 1</h3>
                  <p className='card-text'>$100.000</p>
                </div>
              </a>
            </ProductCard>
          </div>
        </ProductsList>
      </div>
    </ProductsContainer>
  );
};

export default Products;

import React, { useEffect, useState } from 'react';
import AsideCategories from '../components/Products/AsideCategories';
import {
  ProductCard,
  ProductsContainer,
  ProductsList,
} from '../components/Products/Products';

const Products = (props) => {
  const [isWomenSelected, setIsWomenSelected] = useState(false);

  useEffect(() => {
    if (props.location.state) {
      const { category } = props.location.state;
      const women = category === 'women' ? true : false;
      setIsWomenSelected(women);
    }
  }, [props.location.state]);

  return (
    <ProductsContainer>
      <div className='row'>
        <AsideCategories
          isWomenSelected={isWomenSelected}
          setIsWomenSelected={setIsWomenSelected}
        />

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

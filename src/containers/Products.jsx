import React, { useEffect, useState } from 'react';
import AsideCategories from '../components/Products/AsideCategories';
import ProductCardContainer from '../components/Products/ProductCardContainer';
import {
  ProductsContainer,
  ProductsList,
} from '../components/Products/Products';
import { useSelector } from 'react-redux';

const Products = (props) => {
  const [isWomenSelected, setIsWomenSelected] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (props.location.state) {
      const { category } = props.location.state;
      const women = category === 'women' ? true : false;
      setIsWomenSelected(women);
    }
  }, [props.location.state]);

  useEffect(() => {
    const category = isWomenSelected ? 'female' : 'male';
    const productsFilter = products.filter(
      (product) => product.category === category
    );
    setSelectedProducts(productsFilter);
  }, [isWomenSelected, products]);

  return (
    <ProductsContainer>
      <div className='row'>
        <AsideCategories
          isWomenSelected={isWomenSelected}
          setIsWomenSelected={setIsWomenSelected}
        />

        <ProductsList className='col-8 row row-cols-1 row-cols-md-3 g-5 text-center'>
          {selectedProducts.map((element) => (
            <ProductCardContainer key={element.id} product={element} />
          ))}
        </ProductsList>
      </div>
    </ProductsContainer>
  );
};

export default Products;

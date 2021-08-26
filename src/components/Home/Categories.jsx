import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoriesContainer,
  ImgCategory,
  ImgCategoryCaption,
  ImgCategoryContainer,
} from './HomeStyled';

const Categories = () => {
  return (
    <CategoriesContainer>
      <Link
        to={{ pathname: '/productos', state: { category: 'men' } }}
        style={{ textDecoration: 'none' }}
      >
        <ImgCategoryContainer>
          <ImgCategory
            className='img-fluid'
            src='https://i.imgur.com/wI0vA8p.jpg'
            alt='Categoría de hombres'
          />
          <ImgCategoryCaption>Categoría hombres</ImgCategoryCaption>
        </ImgCategoryContainer>
      </Link>
      <Link
        to={{ pathname: '/productos', state: { category: 'women' } }}
        style={{ textDecoration: 'none' }}
      >
        <ImgCategoryContainer>
          <ImgCategory
            className='img-fluid'
            src='https://i.imgur.com/tNCu4OH.jpg'
            alt='Categoría de mujeres'
          />
          <ImgCategoryCaption>Categoría mujeres</ImgCategoryCaption>
        </ImgCategoryContainer>
      </Link>
    </CategoriesContainer>
  );
};

export default Categories;

import React from 'react';
import {
  CategoriesContainer,
  ImgCategory,
  ImgCategoryCaption,
  ImgCategoryContainer,
} from './HomeStyled';

const Categories = () => {
  return (
    <CategoriesContainer>
      <a href='productos.html'>
        <ImgCategoryContainer>
          <ImgCategory
            className='img-fluid'
            src='https://i.imgur.com/wI0vA8p.jpg'
            alt='Categoría de hombres'
          />
          <ImgCategoryCaption>Categoría hombres</ImgCategoryCaption>
        </ImgCategoryContainer>
      </a>
      <a href='productos.html'>
        <ImgCategoryContainer>
          <ImgCategory
            className='img-fluid'
            src='https://i.imgur.com/tNCu4OH.jpg'
            alt='Categoría de mujeres'
          />
          <ImgCategoryCaption>Categoría mujeres</ImgCategoryCaption>
        </ImgCategoryContainer>
      </a>
    </CategoriesContainer>
  );
};

export default Categories;

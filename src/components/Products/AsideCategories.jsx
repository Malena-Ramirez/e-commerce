import React from 'react';
import {
  CategoriesContainer,
  CategoriesTitle,
  CategorySubtitle,
} from './Products';

const AsideCategories = () => {
  return (
    <CategoriesContainer className='col-2'>
      <CategoriesTitle>Categorías</CategoriesTitle>
      <article id='male-category'>
        <CategorySubtitle>Hombres</CategorySubtitle>
      </article>
      <article id='female-category'>
        <CategorySubtitle>Mujeres</CategorySubtitle>
      </article>
    </CategoriesContainer>
  );
};

export default AsideCategories;

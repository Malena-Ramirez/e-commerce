import React from 'react';
import {
  CategoriesContainer,
  CategoriesTitle,
  CategorySubtitle,
} from './Products';

const AsideCategories = ({ isWomenSelected, setIsWomenSelected }) => {
  const handleClick = (e) => {
    const { id } = e.target;
    if (id === 'female') {
      setIsWomenSelected(true);
    } else {
      setIsWomenSelected(false);
    }
  };

  return (
    <CategoriesContainer className='col-2'>
      <CategoriesTitle>Categorías</CategoriesTitle>
      <article>
        <CategorySubtitle
          id='male'
          isSelected={!isWomenSelected}
          onClick={handleClick}
        >
          Hombres
        </CategorySubtitle>
      </article>
      <article>
        <CategorySubtitle
          id='female'
          isSelected={isWomenSelected}
          onClick={handleClick}
        >
          Mujeres
        </CategorySubtitle>
      </article>
    </CategoriesContainer>
  );
};

export default AsideCategories;

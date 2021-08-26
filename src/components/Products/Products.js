import styled from "styled-components";

export const ProductsContainer = styled.main`
  margin: 100px 0;
  min-height: 60vh;
  padding: 0 20px;
`;

export const CategoriesContainer = styled.section`
  margin-top: 48px;
  margin-bottom: 0;
  text-align: center;
`;

export const CategoriesTitle = styled.h1`
  font-size: 1.5rem;
  border-bottom: 0.5px solid #2d3b40;
`;

export const CategorySubtitle = styled.h2`
  font-size: 1.4rem;
  &:hover{
    cursor: pointer;
    transition: all 0.8s;
    transform: scale3d(1.05, 1.05, 1.05);
    font-weight: bold;
  }
`;

export const ProductsList = styled.section`
  margin-top: 0;
  color: #2d3b40;
`;

export const ProductCard = styled.div`
  &:hover{
    transition: all 0.8s;
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;
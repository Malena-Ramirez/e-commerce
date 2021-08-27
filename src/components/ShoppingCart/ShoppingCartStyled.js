import styled from "styled-components";

export const ShoppingCartContainer = styled.main`
  min-height: 80vh;
  padding-top: 110px;
  margin-bottom: 40px;
`;

export const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid #2d3b40;
  font-weight: 600;
  background-color: #32a28a;
  padding: 10px 0;
  color: white;
`;

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #2d3b4091;
`;

export const ProductImgContainer = styled.figure`
  width: 150px;
  text-align: center;
`;

export const TotalToPayText = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    font-weight: 600;
    margin: 10px 0;
    padding: 5px 0;
    border-top: 1px solid #2d3b40;
`;

export const Total1 = styled.p`
  grid-column: 3/4;
  justify-self: end;
`;

export const Total2 = styled.p`
  grid-column: 4/5;
  justify-self: center;
`;
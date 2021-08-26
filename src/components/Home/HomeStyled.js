import styled from "styled-components";

export const WelcomeContainer = styled.section`
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const BannerImgContainer = styled.figure`
  margin: 0;
  width: 100%;
  grid-area: 1/1/4/4;
`;

export const BannerImg = styled.img`
  margin: 0;
  width: 100%;
  height: 650px;
  object-fit: none;
`;

export const BannerTextContainer = styled.div`
  color: white;
  text-shadow: 1px 1px 2px black;
  grid-area: 3/1/4/4;
  text-align: center;
  max-width: 650px;
  justify-self: center;
  @media(min-width: 1010px){
    grid-area: 3/2/4/3;
  }
`;

export const CategoriesContainer = styled.section`
  width: 60%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  @media(min-width:910px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImgCategoryContainer = styled.figure`
  margin:0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(12, 1fr);
  box-shadow: 0 4px 8px 0 #00000033, 0 6px 20px 0 #00000030;
  &:hover{
    transition: all 0.8s;
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

export const ImgCategory = styled.img`
  grid-area: 1/1/13/2;
  margin:0;
`;

export const ImgCategoryCaption = styled.figcaption`
  grid-area: 11/1/13/2;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2px 0;
  background-color: #ffffff61;
  color: #2d3b40;
  margin: 0;
  @media(min-width:910px){
    font-size: 1.8rem;
  }
`;
import React from 'react';
import {
  BannerImg,
  BannerImgContainer,
  BannerTextContainer,
  WelcomeContainer,
} from './HomeStyled';

const Banner = () => {
  return (
    <WelcomeContainer>
      <BannerImgContainer>
        <BannerImg
          className='img-fluid'
          src='https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='Imagen de bienvenida'
        />
      </BannerImgContainer>
      <BannerTextContainer>
        <h1>Bienvenido a Fakery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ab
          voluptatibus similique accusantium quas beatae officia ut provident
          omnis officiis. Perspiciatis saepe nam earum quia, tempora officiis
          minus aliquid? Quasi.
        </p>
      </BannerTextContainer>
    </WelcomeContainer>
  );
};

export default Banner;

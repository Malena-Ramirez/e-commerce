import React from 'react';
import { FooterContainer, LogoFooter } from './FooterStyled';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoFooter src='https://i.imgur.com/MG0lHGL.png' alt='Logo' />
      <ul className='list-unstyled text-light footer-link-list'>
        <li>
          <i className='bi bi-telephone-fill me-2'></i>
          <span>123-456-7890</span>
        </li>
        <li>
          <i className='bi bi-envelope-fill me-2'></i>
          <a
            className='text-decoration-none text-light'
            href='mailto:info@fakery.com'
          >
            info@fakery.com
          </a>
        </li>
        <li className='list-inline-item text-center px-1'>
          <a
            className='text-decoration-none text-light'
            target='_blank'
            href='http://facebook.com/'
            rel='noreferrer'
          >
            <i className='bi bi-facebook'></i>
          </a>
        </li>
        <li className='list-inline-item text-center px-1'>
          <a
            className='text-decoration-none text-light'
            target='_blank'
            href='https://www.instagram.com/'
            rel='noreferrer'
          >
            <i className='bi bi-instagram'></i>
          </a>
        </li>
        <li className='list-inline-item text-center px-1'>
          <a
            className='text-decoration-none text-light'
            target='_blank'
            href='https://www.twitter.com/'
            rel='noreferrer'
          >
            <i className='bi bi-twitter'></i>
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ItemDropdown,
  LogoHeader,
  MenuItem,
  NavbarContainer,
  ShoppingCartContainer,
} from './NavbarStyled';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <header>
      <NavbarContainer className='navbar navbar-expand-lg navbar-dark fixed-top'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <LogoHeader
              className='img-fluid'
              src='https://i.imgur.com/DZTC1nh.png'
              alt='logo de fakery'
            />
          </Link>
          <div className='d-flex'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse me-5'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mb-2 mb-lg-0'>
                <Link to='/' className='nav-link'>
                  <MenuItem className='nav-item'>Inicio</MenuItem>
                </Link>
                <MenuItem className='nav-item dropdown'>
                  <Link
                    to='/'
                    className='nav-link dropdown-toggle'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <ItemDropdown>Productos</ItemDropdown>
                  </Link>
                  <ul
                    className='dropdown-menu dropdown-menu-dark'
                    aria-labelledby='navbarDropdown'
                  >
                    <Link to='/productos' className='dropdown-item'>
                      <MenuItem>Hombres</MenuItem>
                    </Link>
                    <Link to='/productos' className='dropdown-item'>
                      <MenuItem>Mujeres</MenuItem>
                    </Link>
                  </ul>
                </MenuItem>
              </ul>
            </div>
            <ShoppingCartContainer>
              <Link to='/carrito' style={{ color: 'inherit' }}>
                <i className='bi bi-cart position-relative'>
                  {cart.length > 0 && (
                    <span className='position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle'>
                      <span className='visually-hidden'>New alerts</span>
                    </span>
                  )}
                </i>
              </Link>
            </ShoppingCartContainer>
          </div>
        </div>
      </NavbarContainer>
    </header>
  );
};

export default Navbar;

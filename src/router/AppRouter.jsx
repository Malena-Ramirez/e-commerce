import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Home from '../containers/Home';
import Products from '../containers/Products';
import { useDispatch } from 'react-redux';
import { loadProductsAction } from '../actions/productsAction';
import DetailProduct from '../containers/DetailProduct';
import { loadCartAction } from '../actions/cartAction';
import ShoppingCart from '../containers/ShoppingCart';

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsAction());
    dispatch(loadCartAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/productos' component={Products} />
        <Route exact path='/detalle-producto' component={DetailProduct} />
        <Route exact path='/carrito' component={ShoppingCart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Home from '../containers/Home';
import Products from '../containers/Products';
import { useDispatch } from 'react-redux';
import { loadProductsAction } from '../actions/productsAction';
import DetailProduct from '../containers/DetailProduct';

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsAction());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/productos' component={Products} />
        <Route exact path='/detalle-producto' component={DetailProduct} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

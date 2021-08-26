import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Home from '../containers/Home';
import Products from '../containers/Products';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/productos' component={Products} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

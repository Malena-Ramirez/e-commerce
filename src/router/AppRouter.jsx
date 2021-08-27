import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebaseConfig';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Products from '../containers/Products';
import { useDispatch } from 'react-redux';
import { loadProductsAction } from '../actions/productsAction';
import DetailProduct from '../containers/DetailProduct';
import { loadCartAction } from '../actions/cartAction';
import ShoppingCart from '../containers/ShoppingCart';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLooggedIn, setIsLooggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        // dispatch(login(user.uid, user.displayName));
        setIsLooggedIn(true);
        dispatch(loadProductsAction());
        dispatch(loadCartAction());
      } else {
        setIsLooggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return (
      <div className='w-100 h-100 mt-5 d-flex justify-content-center lign-items-center'>
        <div class='spinner-border text-secondary' role='status'>
          <span class='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path='/auth'
          component={AuthRouter}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path='/'
          component={Home}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path='/productos'
          component={Products}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path='/detalle-producto'
          component={DetailProduct}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path='/carrito'
          component={ShoppingCart}
          isAuthenticated={isLooggedIn}
        />

        <Redirect to='/auth/login' />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;

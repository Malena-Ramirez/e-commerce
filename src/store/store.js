import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducer';
import { loginReducer } from '../reducers/loginReducer';

const composeEnhancers = (typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk))
);
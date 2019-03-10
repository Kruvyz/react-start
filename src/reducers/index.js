import { combineReducers } from 'redux';
import { productsHasErrored, productsIsLoading, products } from './products';

export default combineReducers({
  products,
  productsHasErrored,
  productsIsLoading
});

import {
  PRODUCTS_HAS_ERRORED,
  PRODUCTS_FETCH_DATA_SUCCESS,
  PRODUCTS_IS_LOADING
} from '../actions/products';

// export default function getProducts(state, action) {
//     switch(action.type) {
//       case PRODUCTS_HAS_ERRORED:
//         return action.hasErrored;
//       case PRODUCTS_IS_LOADING:
//         return action.isLoading;
//       case PRODUCTS_FETCH_DATA_SUCCESS:
//         return action.products;
//       default: return state;
//     }
// }

export function productsHasErrored(state = false, action) {
  if (action.type === PRODUCTS_HAS_ERRORED) return action.hasErrored;

  return state;
}

export function productsIsLoading(state = false, action) {
  if (action.type === PRODUCTS_IS_LOADING) return action.isLoading;

  return state;
}

export function products(state = [], action) {
  if (action.type === PRODUCTS_FETCH_DATA_SUCCESS) {
    return action.products;
  }

  return state;
}

export const PRODUCTS_HAS_ERRORED = 'PRODUCTS_HAS_ERRORED';
export const PRODUCTS_IS_LOADING = 'PRODUCTS_IS_LOADING';
export const PRODUCTS_FETCH_DATA_SUCCESS = 'PRODUCTS_FETCH_DATA_SUCCESS';

export function productsHasErrored(bool) {
  return {
    type: PRODUCTS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function productsIsLoading(bool) {
  return {
    type: PRODUCTS_IS_LOADING,
    isLoading: bool
  };
}

export function products(products) {
  return {
    type: PRODUCTS_FETCH_DATA_SUCCESS,
    products
  };
}

export function productsFetchData(url) {
  return dispatch => {
    dispatch(productsIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(productsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(products(items)));
      .catch(() => dispatch(productsHasErrored(true)));
  };
}

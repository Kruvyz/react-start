import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsFetchData } from '../../actions/products';
import Product from '../Product';
import { ProductsConteiner } from './ProductList.styles';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchData(
      'https://my-json-server.typicode.com/Kruvyz/angularTest/Products'
    );
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the products</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ProductsConteiner>
        {this.props.products.map(item => (
          <Product key={item.id} {...item} />
        ))}
      </ProductsConteiner>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    hasErrored: state.productsHasErrored,
    isLoading: state.productsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(productsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

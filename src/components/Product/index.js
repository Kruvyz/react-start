import React from 'react';
import { Link } from 'react-router-dom';
import { Conteiner } from './Product.styles';

const Product = props => {
  return (
    <Conteiner>
      <img src={props.imageUrl} width="200px" />
      <Link to={`/details/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
    </Conteiner>
  );
};

export default Product;

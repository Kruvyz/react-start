import React from 'react';

const Details = ({ match }) => {
  return <div>id = {match.params.id}</div>;
};

export default Details;

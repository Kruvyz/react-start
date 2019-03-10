import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Details from '../Details';

const WrapPages = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home Page</Link>

        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
      </div>
    </BrowserRouter>
  );
};

export default WrapPages;

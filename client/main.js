import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './page/Home/index';

ReactDOM.render(
  <Router>
    <Route component={Home} />
  </Router>,
  document.getElementById('root'),
);

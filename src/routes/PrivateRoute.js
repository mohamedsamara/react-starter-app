/**
 *
 * PrivateRoute.js
 * PrivateRoute configuration
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import NotFoundPage from '../components/NotFoundPage';

const PrivateRoute = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='**' component={NotFoundPage} />
  </Switch>
);

export default PrivateRoute;

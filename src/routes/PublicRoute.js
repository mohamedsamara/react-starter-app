/**
 *
 * PublicRoute.js
 * PublicRoute configuration
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../containers/Login';
import NotFoundPage from '../components/NotFoundPage';

const PublicRoute = () => (
  <Switch>
    <Route exact path='/' component={LoginPage} />
    <Route path='**' component={NotFoundPage} />
  </Switch>
);

export default PublicRoute;

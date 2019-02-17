/**
 *
 * routes.js
 * routes configuration
 */

import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import actions from '../actions';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = ({ authenticated = true }) => (
  <Route
    path="/"
    render={() => (authenticated === true ? <PrivateRoute /> : <PublicRoute />)}
  />
);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actions,
)(Routes);

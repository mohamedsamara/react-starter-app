/**
 *
 * PrivateRoute.js
 * PrivateRoute configuration
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/Page404';
import Todo from '../containers/Todo';
import Post from '../containers/Post';

// layout
import Navigation from '../containers/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notifications from '../components/Notification';

const PrivateRoute = () => (
  <div className="application">
    <Navigation />
    <Notifications />
    <Header />
    <main className="main">
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/todo" component={Todo} />
          <Route path="/post" component={Post} />
          <Route path="**" component={NotFoundPage} />
        </Switch>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivateRoute;

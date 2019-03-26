/**
 *
 * PublicRoute.js
 * PublicRoute configuration
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes
import LoginPage from '../containers/Login';
import SignupPage from '../containers/Signup';
import NotFoundPage from '../components/Page404';

// layout
import Footer from '../components/Footer';
import Notifications from '../components/Notification';
import TopHeader from '../containers/TopHeader';

const PublicRoute = () => (
  <div className="application">
    <Notifications />
    <TopHeader />
    <main className="main">
      <div className="wrapper">
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="**" component={NotFoundPage} />
        </Switch>
      </div>
    </main>
    <Footer isPrivate />
  </div>
);

export default PublicRoute;

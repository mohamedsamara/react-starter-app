/**
 *
 * Notification
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ReduxToastr from 'react-redux-toastr';
import messages from './messages';
import styles from './styles.css';

const Notification = props => {
  return (
    <ReduxToastr
      timeOut={3000}
      newestOnTop
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
    />
  );
};

Notification.propTypes = {};

export default Notification;

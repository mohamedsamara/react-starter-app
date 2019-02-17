/**
 *
 * Page404
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';

const Page404 = props => {
  return (
    <div className={styles.page404}>
      <h4>404 Oops! You are lost.</h4>
      <p>The page you are looking for was not found.</p>
    </div>
  );
};

const { bool } = PropTypes;
Page404.propTypes = {};

export default Page404;

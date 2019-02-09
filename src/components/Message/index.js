/**
 *
 * Message
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';

const Message = props => {
  const { error } = props;

  return (
    <div className={styles.message}>
      <p>{error.errorMessage}</p>
    </div>
  );
};

const { shape, string, bool } = PropTypes;
Message.propTypes = {
  error: shape({
    errorMessage: string,
    isError: bool
  })
};

export default Message;

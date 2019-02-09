/**
 *
 * LoadingIndicator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles.css';

const muStyles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const LoadingIndicator = props => {
  const { classes, message } = props;

  return (
    <div className={styles.loadingIndicator}>
      <CircularProgress className={classes.progress} />
      <p>{message}</p>
    </div>
  );
};

const { object, string } = PropTypes;

LoadingIndicator.propTypes = {
  classes: object.isRequired,
  message: string.isRequired
};

export default withStyles(muStyles)(LoadingIndicator);

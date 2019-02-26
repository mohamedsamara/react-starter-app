/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import messages from './messages';
import styles from './styles.css';

const muiStyles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = props => {
  const { classes } = props;

  const loginLink = props => <Link to="/login" {...props} />;
  const signupLink = props => <Link to="/signup" {...props} />;
  const todoLink = props => <Link to="/todo" {...props} />;
  const postLink = props => <Link to="/post" {...props} />;

  return (
    <div className="header">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Boilerplate
            </Typography>
            <Button component={loginLink} color="inherit">
              Login
            </Button>
            <Button component={signupLink} color="inherit">
              Signup
            </Button>
            <Button component={todoLink} color="inherit">
              Todo
            </Button>
            <Button component={postLink} color="inherit">
              Post
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

const { object } = PropTypes;

Header.propTypes = {
  classes: object.isRequired,
};

export default withStyles(muiStyles)(Header);

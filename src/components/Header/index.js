/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import messages from './messages';
import styles from './styles.css';

import { anchorEl } from '../../containers/TopHeader/types';

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
  const { classes, anchorEl, openMenu, closeMenu, setLocale } = props;

  return (
    <div className="header">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={`${classes.menuButton} header-button`}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={`${classes.grow} header-title`}
            >
              Boilerplate
            </Typography>
            <IconButton
              color="inherit"
              aria-label="More"
              aria-owns={anchorEl ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={event => openMenu(event.currentTarget)}
            >
              <MoreVertIcon />
            </IconButton>

            <FormattedMessage {...messages.enToggle}>
              {txt => (
                <Button onClick={() => setLocale('en')} color="inherit">
                  {txt}
                </Button>
              )}
            </FormattedMessage>

            <FormattedMessage {...messages.arToggle}>
              {txt => (
                <Button onClick={() => setLocale('ar')} color="inherit">
                  {txt}
                </Button>
              )}
            </FormattedMessage>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => closeMenu()}
            >
              <MenuItem onClick={() => closeMenu()}>
                <FormattedMessage {...messages.signinLink}>
                  {txt => <Link to="/login">{txt}</Link>}
                </FormattedMessage>
              </MenuItem>
              <MenuItem onClick={() => closeMenu()}>
                <FormattedMessage {...messages.signupLink}>
                  {txt => <Link to="/signup">{txt}</Link>}
                </FormattedMessage>
              </MenuItem>
              <MenuItem onClick={() => closeMenu()}>
                <Link to="/todo">Todos</Link>
              </MenuItem>
              <MenuItem onClick={() => closeMenu()}>
                <Link to="/post">Posts</Link>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

const { object, func } = PropTypes;

Header.propTypes = {
  classes: object.isRequired,
  openMenu: func,
  closeMenu: func,
  anchorEl: anchorEl,
};

export default withStyles(muiStyles)(Header);

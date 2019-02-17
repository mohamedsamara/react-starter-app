/**
 *
 * NavigationDrawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import messages from './messages';
import styles from './styles.css';

const muiStyles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const NavigationDrawer = props => {
  const { toggleDrawer, isDrawerOpen, classes } = props;

  const sideList = (
    <div>
      <List className={classes.list}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fullList = (
    <div className={classes.fullList}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="navigationDrawer">
      <Button onClick={() => toggleDrawer('left', true)}>Open Left</Button>
      <Button onClick={() => toggleDrawer('right', true)}>Open Right</Button>
      <Button onClick={() => toggleDrawer('top', true)}>Open Top</Button>
      <Button onClick={() => toggleDrawer('bottom', true)}>Open Bottom</Button>
      <Drawer
        open={isDrawerOpen.left}
        onClose={() => toggleDrawer('left', false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer('left', false)}
          onKeyDown={() => toggleDrawer('left', false)}
        >
          {sideList}
        </div>
      </Drawer>
      <Drawer
        anchor="top"
        open={isDrawerOpen.top}
        onClose={() => toggleDrawer('top', false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer('top', false)}
          onKeyDown={() => toggleDrawer('top', false)}
        >
          {fullList}
        </div>
      </Drawer>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen.bottom}
        onClose={() => toggleDrawer('bottom', false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer('bottom', false)}
          onKeyDown={() => toggleDrawer('bottom', false)}
        >
          {fullList}
        </div>
      </Drawer>
      <Drawer
        anchor="right"
        open={isDrawerOpen.right}
        onClose={() => toggleDrawer('right', false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer('right', false)}
          onKeyDown={() => toggleDrawer('right', false)}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  );
};

const { bool } = PropTypes;

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.shape({
    side: PropTypes.string,
    open: PropTypes.bool,
  }),
};

export default withStyles(muiStyles)(NavigationDrawer);

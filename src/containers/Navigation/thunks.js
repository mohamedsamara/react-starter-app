/*
 *
 * Navigation
 *
 */

// Do this in every file where you use `fetch`
import fetch from 'cross-fetch';
import validator from 'validator';

import { handleToggleDrawer } from './actions';

// Toggle Drawer
export function toggleDrawer(side, open) {
  const isDrawerOpen = {};
  isDrawerOpen.side = side;
  isDrawerOpen.open = open;

  return function(dispatch, getState) {
    return dispatch(handleToggleDrawer(isDrawerOpen));
  };
}

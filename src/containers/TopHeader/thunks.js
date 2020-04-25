/*
 *
 * TopHeader thunks
 *
 */

// Do this in every file where you use `fetch`
import fetch from 'cross-fetch';
import { toastr } from 'react-redux-toastr';
import { push, goBack } from 'connected-react-router';

import { handleOpenMenu, handleCloseMenu } from './actions';

// Open Menu
export function openMenu(target) {
  return function(dispatch, getState) {
    return dispatch(handleOpenMenu(target));
  };
}

// Close Menu
export function closeMenu() {
  return function(dispatch, getState) {
    return dispatch(handleCloseMenu());
  };
}

/*
 *
 * Navigation actions
 *
 */

import { TOGGLE_DRAWER } from './constants';

export function handleToggleDrawer(isDrawerOpen) {
  return {
    type: TOGGLE_DRAWER,
    isDrawerOpen
  };
}

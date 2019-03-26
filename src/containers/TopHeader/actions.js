/*
 *
 * TopHeader actions
 *
 */

import { OPEN_MENU, CLOSE_MENU } from './constants';

export function handleOpenMenu(target) {
  return {
    type: OPEN_MENU,
    target,
  };
}

export function handleCloseMenu() {
  return {
    type: CLOSE_MENU,
  };
}

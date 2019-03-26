/*
 *
 * TopHeader reducer
 *
 */

import update from 'immutability-helper';

import { OPEN_MENU, CLOSE_MENU } from './constants';

const initialState = {
  anchorEl: null,
};

const topHeaderReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case OPEN_MENU:
      newState = update(state, {
        anchorEl: {
          $set: action.target,
        },
      });
      return newState;

    case CLOSE_MENU:
      newState = update(state, {
        anchorEl: {
          $set: null,
        },
      });
      return newState;

    default:
      return state;
  }
};

export default topHeaderReducer;

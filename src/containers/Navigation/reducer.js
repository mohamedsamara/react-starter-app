/*
 *
 * Navigation reducer
 *
 */

import update from 'immutability-helper';

import { TOGGLE_DRAWER } from './constants';

const initialState = {
  isDrawerOpen: {
    top: false,
    left: false,
    bottom: false,
    right: false,
  },
};

const navigationReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case TOGGLE_DRAWER:
      newState = update(state, {
        isDrawerOpen: {
          [action.isDrawerOpen.side]: {
            $set: action.isDrawerOpen.open,
          },
        },
      });
      return newState;
    default:
      return state;
  }
};

export default navigationReducer;

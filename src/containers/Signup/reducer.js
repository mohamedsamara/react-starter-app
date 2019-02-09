/*
 * 
 * Signup reducer
 *
 */

import update from 'immutability-helper';

import {
  DEFAULT_ACTION,
} from './constants';


const initialState = {
}

const signupReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DEFAULT_ACTION:
      newState = update(state, {}
      );
      return newState;
    default:
      return state;
  }
};

export default signupReducer;

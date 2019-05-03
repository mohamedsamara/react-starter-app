/*
 *
 * LanguageProvider reducer
 *
 */

import update from 'immutability-helper';

import { SET_LOCALE } from './constants';

const initialState = {
  locale: 'ar',
};

const languageProviderReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_LOCALE:
      newState = update(state, {
        locale: {
          $set: action.locale,
        },
      });
      return newState;
    default:
      return state;
  }
};

export default languageProviderReducer;

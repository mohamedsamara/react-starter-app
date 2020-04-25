/*
 *
 * LanguageProvider thunks
 *
 */

// Do this in every file where you use `fetch`
import fetch from 'cross-fetch';
import { toastr } from 'react-redux-toastr';
import { push, goBack } from 'connected-react-router';

import { handleSetLocale } from './actions';

export function setLocale(lang) {
  return function(dispatch, getState) {
    localStorage.appLang = lang;
    return dispatch(handleSetLocale(lang));
  };
}

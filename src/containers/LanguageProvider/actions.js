/*
 *
 * LanguageProvider actions
 *
 */

import { SET_LOCALE } from './constants';

export function handleSetLocale(language) {
  return {
    type: SET_LOCALE,
    locale: language,
  };
}

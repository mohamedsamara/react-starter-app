/**
 *
 * i18n.js
 * language & locale configuration
 */

import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';

import enTranslationMessages from './translations/en.json';
import arTranslationMessages from './translations/ar.json';

export const appLocales = ['en'];

addLocaleData(en);
addLocaleData(ar);

const formatTranslationMessages = messages => {
  const formattedMessages = {};
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  ar: formatTranslationMessages(arTranslationMessages),
};

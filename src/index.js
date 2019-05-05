/**
 *
 * index.js
 * This is the entry file for the application, only render App component.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { translationMessages } from './i18n';

import App from './app';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

// Intl polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/ar.js'),
      ]),
    ) /* eslint-disable */
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

registerServiceWorker();

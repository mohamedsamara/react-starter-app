/**
 *
 * index.js
 * This is the entry file for the application, only render App component.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

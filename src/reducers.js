/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';

// import reducers
import applicationReducer from './containers/Application/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    toastr: toastrReducer,
    application: applicationReducer
  });

export default createReducer;

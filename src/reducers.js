/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';

// import reducers
import navigationReducer from './containers/Navigation/reducer';
import todoReducer from './containers/Todo/reducer';
import postReducer from './containers/Post/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    toastr: toastrReducer,
    navigation: navigationReducer,
    todo: todoReducer,
    post: postReducer,
  });

export default createReducer;

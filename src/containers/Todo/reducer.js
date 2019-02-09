/*
 *
 * Todo reducer
 *
 */

import update from 'immutability-helper';

import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from './constants';

const initialState = {
  todos: [],
  isFetching: false,
  error: {
    isError: false,
    errorMessage: ''
  }
};

const todoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      newState = update(state, {
        isFetching: {
          $set: action.isFetching
        }
      });
      return newState;

    case FETCH_TODOS_SUCCESS:
      newState = update(state, {
        todos: {
          $set: action.todos
        }
      });
      return newState;

    case FETCH_TODOS_FAILURE:
      newState = update(state, {
        error: {
          $merge: action.error
        },
        isFetching: {
          $set: false
        }
      });
      return newState;
    default:
      return state;
  }
};

export default todoReducer;

/*
 *
 * Post reducer
 *
 */

import update from 'immutability-helper';

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  HANLDE_POSTS_FAILURE,
  DELETE_POST_SUCCESS
} from './constants';

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      newState = update(state, {
        posts: {
          $set: action.posts
        }
      });
      return newState;

    case DELETE_POST_SUCCESS:
      newState = update(state, {
        posts: {
          $splice: [[action.index, 1]]
        }
      });
      return newState;

    default:
      return state;
  }
};

export default postReducer;

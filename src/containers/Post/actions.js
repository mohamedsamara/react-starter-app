/*
 *
 * Post actions
 *
 */

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  HANLDE_POSTS_FAILURE,
  DELETE_POST_SUCCESS,
} from './constants';

export function fetchPostsRequest(isFetching) {
  return {
    type: FETCH_POSTS_REQUEST,
    isFetching,
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts,
  };
}

export function handlePostFailure(error) {
  return {
    type: HANLDE_POSTS_FAILURE,
    error,
  };
}

export function deletePostSuccess(index) {
  return {
    type: DELETE_POST_SUCCESS,
    index,
  };
}

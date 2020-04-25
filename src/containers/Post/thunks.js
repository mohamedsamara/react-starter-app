/*
 *
 * Post thunks
 *
 */

// Do this in every file where you use `fetch`
import fetch from 'cross-fetch';
import validator from 'validator';
import { toastr } from 'react-redux-toastr';
import { push, goBack } from 'connected-react-router';

import {
  fetchPostsRequest,
  fetchPostsSuccess,
  handlePostFailure,
  deletePostSuccess,
} from './actions';

// post failure handler
export function postFailureHandler(errorData) {
  return function(dispatch, getState) {
    return dispatch(handlePostFailure(errorData));
  };
}

// fetch posts API
export function fetchPosts() {
  return function(dispatch, getState) {
    dispatch(fetchPostsRequest(true));

    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then(data => {
        toastr.success('Success', 'Posts fetched successfully');
        dispatch(fetchPostsSuccess(data));
        dispatch(fetchPostsRequest(false));
      })
      .catch(error => {
        const errorData = {};
        errorData.isError = true;
        errorData.errorMessage = 'Failed to fetch Posts';

        toastr.error('Error', 'Error fetching todos');

        dispatch(postFailureHandler(errorData));
      });
  };
}

// delete post API
export function deletePost(id, index) {
  return function(dispatch, getState) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then(data => {
        // check if the post is deleted then dispatch an action to remove the post from the store.
        toastr.success('Success', 'Post deleted successfully');
        dispatch(deletePostSuccess(index));
      })
      .catch(error => {
        const errorData = {};
        errorData.isError = true;
        errorData.errorMessage = 'Failed to delete post';

        toastr.error('Error', 'Error deleting post');

        dispatch(postFailureHandler(errorData));
      });
  };
}

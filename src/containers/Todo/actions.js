/*
 *
 * Todo actions
 *
 */

import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from './constants';

export function fetchTodosRequest(isFetching) {
  return {
    type: FETCH_TODOS_REQUEST,
    isFetching
  };
}

export function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  };
}

export function fetchTodosFailure(error) {
  return {
    type: FETCH_TODOS_FAILURE,
    error
  };
}

import todoReducer from '../reducer';
import { FETCH_TODOS_REQUEST } from '../constants';

describe('todoReducer', () => {
  it('returns the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({
      todos: [],
      isFetching: false,
      error: {
        isError: false,
        errorMessage: ''
      }
    });
  });

  it('returns the correct state', () => {
    const action = { type: FETCH_TODOS_REQUEST, isFetching: false };

    expect(todoReducer(undefined, action)).toMatchSnapshot();
  });
});

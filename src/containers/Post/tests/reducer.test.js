import postReducer from '../reducer';
import { DELETE_POST_SUCCESS } from '../constants';

describe('postReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      posts: [],
    };
  });

  it('should return the initial state', () => {
    const expected = initialState;

    expect(postReducer(undefined, {})).toEqual(expected);
  });

  it('should handle the delete post action correctly', () => {
    const action = { type: DELETE_POST_SUCCESS, index: 1 };

    expect(postReducer(undefined, action)).toMatchSnapshot();
  });
});

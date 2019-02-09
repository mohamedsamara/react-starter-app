import { deletePostSuccess } from '../actions';
import { DELETE_POST_SUCCESS } from '../constants';

describe('Post Actions', () => {
  it('has a type of DELETE_POST_SUCCESS', () => {
    const expected = {
      type: DELETE_POST_SUCCESS,
      index: 1
    };
    expect(deletePostSuccess(1)).toEqual(expected);
    expect(deletePostSuccess(1)).toMatchSnapshot();
  });
});

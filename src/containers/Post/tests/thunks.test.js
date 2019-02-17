import { deletePost } from '../thunks';

describe('Posts Thunk', () => {
  it('should dispatch correct actions when deleting post', () => {
    const mockDispatch = jest.fn();
    const result = deletePost(1);

    expect(typeof deletePost(1)).toEqual('function');

    return result(mockDispatch).then(() => {
      expect(mockDispatch.mock.calls).toMatchSnapshot();
    });
  });
});

import { defaultAction } from '../thunks';

describe('application Thunk', () => {
  it('should dispatch correct actions when handling defaultAction', () => {
    const mockDispatch = jest.fn();
    const result = defaultAction();

    expect(typeof defaultAction()).toEqual('function');

    return result(mockDispatch).then(() => {
      expect(mockDispatch.mock.calls).toMatchSnapshot();
    });
  });
});


import { fetchTodos } from '../thunks';

describe('Todos Thunk', () => {
  it('should dispatch correct actions when fetching todos', () => {
    const mockDispatch = jest.fn();
    const result = fetchTodos();

    expect(typeof fetchTodos()).toEqual('function');

    return result(mockDispatch).then(() => {
      expect(mockDispatch.mock.calls).toMatchSnapshot();
    });
  });
});

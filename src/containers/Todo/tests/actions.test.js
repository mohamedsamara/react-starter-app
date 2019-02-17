import { fetchTodosRequest } from '../actions';
import { FETCH_TODOS_REQUEST } from '../constants';

describe('Todos Actions', () => {
  it('has a type of FETCH_TODOS_REQUEST', () => {
    const expected = {
      type: FETCH_TODOS_REQUEST,
      isFetching: false,
    };

    expect(fetchTodosRequest(false)).toEqual(expected);
    expect(fetchTodosRequest(false)).toMatchSnapshot();
  });
});

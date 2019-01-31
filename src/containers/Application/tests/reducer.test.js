import applicationReducer from '../reducer';
import { DEFAULT_ACTION } from '../constants';

describe('applicationReducer', () => {

  let initialState;
  beforeEach(() => {
    initialState = {
    };
  });

   it('should return the initial state', () => {
    const expected = initialState;
    expect(applicationReducer(undefined, {})).toEqual(expected);
  });

  it('should handle the DEFAULT_ACTION action correctly', () => {
    const action = { type: DEFAULT_ACTION };
    expect(applicationReducer(undefined, action)).toMatchSnapshot();
  });

});





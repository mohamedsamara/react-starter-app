import loginReducer from '../reducer';
import { DEFAULT_ACTION } from '../constants';

describe('loginReducer', () => {

  let initialState;
  beforeEach(() => {
    initialState = {
    };
  });

   it('should return the initial state', () => {
    const expected = initialState;
    expect(loginReducer(undefined, {})).toEqual(expected);
  });

  it('should handle the DEFAULT_ACTION action correctly', () => {
    const action = { type: DEFAULT_ACTION };
    expect(loginReducer(undefined, action)).toMatchSnapshot();
  });

});





import languageProviderReducer from '../reducer';
import { SET_LOCALE } from '../constants';

describe('languageProviderReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      locale: 'en',
    };
  });

  it('should return the initial state', () => {
    const expected = initialState;
    expect(languageProviderReducer(undefined, {})).toEqual(expected);
  });

  it('should handle the SET_LOCALE action correctly', () => {
    const action = { type: SET_LOCALE };
    expect(languageProviderReducer(undefined, action)).toMatchSnapshot();
  });
});

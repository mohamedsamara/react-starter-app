import { setLocale } from '../thunks';
import { SET_LOCALE } from '../constants';

describe('languageProvider Thunk', () => {
  it('should dispatch correct actions when handling setLocale', () => {
    const mockDispatch = jest.fn();

    const locale = 'en';

    const expected = {
      type: SET_LOCALE,
      locale,
    };

    expect(typeof setLocale()).toEqual('function');
    setLocale('en')(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
    expect(mockDispatch).toMatchSnapshot();
  });
});

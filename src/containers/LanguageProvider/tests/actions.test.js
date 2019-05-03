import { handleSetLocale } from '../actions';
import { SET_LOCALE } from '../constants';

describe('LanguageProvider Actions', () => {
  it('has a type of SET_LOCALE', () => {
    const locale = 'en';

    const expected = {
      type: SET_LOCALE,
      locale,
    };
    expect(handleSetLocale(locale)).toEqual(expected);
    expect(handleSetLocale(locale)).toMatchSnapshot();
  });
});

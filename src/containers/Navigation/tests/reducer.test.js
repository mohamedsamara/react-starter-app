import navigationReducer from '../reducer';

describe('navigationReducer', () => {
  it('returns the initial state', () => {
    expect(navigationReducer(undefined, {})).toEqual({
      isDrawerOpen: {
        top: false,
        left: false,
        bottom: false,
        right: false,
      },
    });
  });
});

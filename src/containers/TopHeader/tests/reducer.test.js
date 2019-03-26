import topHeaderReducer from '../reducer';

describe('topHeaderReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      anchorEl: null,
    };
  });

  it('should return the initial state', () => {
    const expected = initialState;
    expect(topHeaderReducer(undefined, {})).toEqual(expected);
  });
});

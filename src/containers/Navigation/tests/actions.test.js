import { handleToggleDrawer } from '../actions';
import { TOGGLE_DRAWER } from '../constants';

describe('Navigation Actions', () => {
  it('has a type of TOGGLE_DRAWER', () => {
    const isDrawerOpen = {};
    isDrawerOpen.side = 'right';
    isDrawerOpen.open = true;

    const expected = {
      type: TOGGLE_DRAWER,
      isDrawerOpen,
    };

    expect(handleToggleDrawer(isDrawerOpen)).toEqual(expected);
  });
});

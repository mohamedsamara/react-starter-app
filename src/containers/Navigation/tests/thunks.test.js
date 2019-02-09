import { toggleDrawer } from '../thunks';
import { TOGGLE_DRAWER } from '../constants';

describe('Navigation Thunk', () => {
  it('should create an action to toggle drawer', () => {
    const mockDispatch = jest.fn();

    let isDrawerOpen = {};
    isDrawerOpen.side = 'right';
    isDrawerOpen.open = true;

    const expected = {
      type: TOGGLE_DRAWER,
      isDrawerOpen
    };

    expect(typeof toggleDrawer()).toEqual('function');
    toggleDrawer('right', true)(mockDispatch);
    expect(mockDispatch).toBeCalledWith(expected);
    expect(mockDispatch).toMatchSnapshot();
  });
});

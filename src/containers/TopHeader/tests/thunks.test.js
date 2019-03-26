import { openMenu, closeMenu } from '../thunks';
import { OPEN_MENU, CLOSE_MENU } from '../constants';

describe('topHeader Thunk', () => {
  it('should dispatch correct actions when handling openMenu', () => {
    const mockDispatch = jest.fn();

    const target =
      '<button class="MuiButtonBase-root-29 MuiIconButton-root-89 MuiIconButton-colorInherit-90" tabindex="0" type="button" aria-label="More" aria-haspopup="true" aria-owns="long-menu"><span class="MuiIconButton-label-94"><svg class="MuiSvgIcon-root-95" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></span><span class="MuiTouchRipple-root-142"></span></button>';

    const expected = {
      type: OPEN_MENU,
      target,
    };

    expect(typeof openMenu()).toEqual('function');
    openMenu(target)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
    expect(mockDispatch).toMatchSnapshot();
  });

  it('should dispatch correct actions when handling closeMenu', () => {
    const mockDispatch = jest.fn();

    const expected = {
      type: CLOSE_MENU,
    };

    expect(typeof openMenu()).toEqual('function');
    closeMenu()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
    expect(mockDispatch).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import NavigationDrawer from '../index';

describe('<NavigationDrawer />', () => {
  it('should render an <NavigationDrawer> tag', () => {
    const isDrawer = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };

    const toggleDrawer = jest.fn();

    const wrapper = shallow(
      <NavigationDrawer
        toggleDrawer={(side, open) => toggleDrawer(side, open)}
        isDrawerOpen={isDrawer}
      />,
    );

    expect(wrapper.exists()).toBe(true);
  });
});

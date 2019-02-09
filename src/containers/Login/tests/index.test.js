import React from 'react';
import { shallow } from 'enzyme';

import Login from '../index';

describe('<Login />', () => {
  it('should render an <Login> tag', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });
});

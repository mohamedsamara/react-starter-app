import React from 'react';
import { shallow } from 'enzyme';

import Signup from '../index';

describe('<Signup />', () => {
  it('should render an <Signup> tag', () => {
    const wrapper = shallow(<Signup />);

    expect(wrapper.exists()).toBe(true);
  });
});

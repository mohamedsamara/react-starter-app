import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render <Header> tag', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
  });
});

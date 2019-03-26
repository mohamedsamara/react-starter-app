import React from 'react';
import { shallow } from 'enzyme';

import TopHeader from '../index';

describe('<TopHeader />', () => {
  it('should render <TopHeader />', () => {
    const wrapper = shallow(<TopHeader />);

    expect(wrapper.exists()).toBe(true);
  });
});

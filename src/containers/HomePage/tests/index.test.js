 import React from 'react';
 import { shallow } from 'enzyme';

 import HomePage from '../index';

describe('<HomePage />', () => {
 it('should render <HomePage />', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.exists()).toBe(true);
  });
});
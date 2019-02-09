import React from 'react';
import { shallow } from 'enzyme';

import Todo from '../index';

describe('<Todo />', () => {
  it('should render <Todo> tag', () => {
    const wrapper = shallow(<Todo />);

    expect(wrapper.exists()).toBe(true);
  });
});

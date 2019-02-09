 import React from 'react';
 import { shallow } from 'enzyme';

 import Post from '../index';


describe('<Post />', () => {
  it('should render an <Post> tag', () => {
    const wrapper = shallow(<Post />);

    expect(wrapper.exists()).toBe(true);
  });
});


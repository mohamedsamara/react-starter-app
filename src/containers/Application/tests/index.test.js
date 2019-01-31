 import React from 'react';
 import { shallow } from 'enzyme';

 import Application from '../index';

describe('<Application />', () => {
 it('should render <Application />', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper.exists()).toBe(true);
  });
});
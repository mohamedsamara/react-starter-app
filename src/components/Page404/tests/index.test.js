import React from 'react';
import { shallow } from 'enzyme';

import Page404 from '../index';

describe('<Page404 />', () => {
  it('should render an <Page404> tag', () => {
    const wrapper = shallow(<Page404 />);

    expect(wrapper.exists()).toBe(true);
  });
});

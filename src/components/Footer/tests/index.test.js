import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render an <Footer> tag', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the copyright', () => {
    const wrapper = shallow(<Footer />);
    const text = wrapper.find('.footer-copyright').text();
    expect(text).toEqual(`© ${new Date().getFullYear()} boilerplate`);
  });
});

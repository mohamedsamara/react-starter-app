import React from 'react';
import { shallow } from 'enzyme';

import LanguageProvider from '../index';

describe('<LanguageProvider />', () => {
  it('should render <LanguageProvider />', () => {
    const wrapper = shallow(<LanguageProvider />);

    expect(wrapper.exists()).toBe(true);
  });
});

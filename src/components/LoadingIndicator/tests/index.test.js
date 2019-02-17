import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render an <LoadingIndicator> tag', () => {
    const wrapper = shallow(<LoadingIndicator message="Loading" />);

    expect(wrapper.exists()).toBe(true);
  });
});

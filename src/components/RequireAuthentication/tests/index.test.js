 import React from 'react';
 import { shallow } from 'enzyme';
 import renderer from 'react-test-renderer';

 import RequireAuthentication from '../index';

describe('<RequireAuthentication />', () => {
 it('should render an <RequireAuthentication />', () => {
    const wrapper = shallow(<RequireAuthentication />);

    expect(wrapper.exists()).toBe(true);
  });
});


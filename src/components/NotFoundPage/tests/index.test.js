 import React from 'react';
 import { shallow } from 'enzyme';
 import renderer from 'react-test-renderer';

 import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
 it('should render an <NotFoundPage />', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper.exists()).toBe(true);
  });
});


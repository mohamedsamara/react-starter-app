import React from 'react';
import { shallow } from 'enzyme';

import Message from '../index';

let error = { isError: false, errorMessage: 'test' };

const renderComponent = (props = {}) =>
  shallow(<Message {...props} error={error} />);

describe('<Message />', () => {
  it('should render <Message> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.exists()).toBe(true);
  });

  it('should render a <p>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('p')).toHaveLength(1);
  });
});

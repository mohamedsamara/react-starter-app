import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Dashboard from '../index';
import styles from '../styles.css';
import messages from '../messages';

describe('<Dashboard />', () => {
  it('should render an <Dashboard> tag', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the default message', () => {
    const renderedComponent = shallow(<Dashboard />);
    expect(
      renderedComponent.contains(
        <div className={styles.dashboard}>
          <FormattedMessage {...messages.dashboardMessage} />
        </div>
      )
    ).toBe(true);
  });
});

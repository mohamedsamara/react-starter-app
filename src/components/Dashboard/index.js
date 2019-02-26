/**
 *
 * Dashboard
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';

const Dashboard = props => {
  return (
    <div className={styles.dashboard}>
      <FormattedMessage {...messages.dashboardMessage} />
    </div>
  );
};

export default Dashboard;

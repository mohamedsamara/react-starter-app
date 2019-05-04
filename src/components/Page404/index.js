/**
 *
 * Page404
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';

const Page404 = props => {
  return (
    <div className={styles.page404}>
      <FormattedMessage {...messages.notFound}>
        {txt => <p>{txt}</p>}
      </FormattedMessage>
    </div>
  );
};

export default Page404;

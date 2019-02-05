/**
*
* NotFoundPage
*
*/


import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';

class NotFoundPage extends React.Component {
  constructor(props) {
  super(props);
}

render() {
return (
  <div className={ styles.notfoundpage}>
      <FormattedMessage {...messages.header} />
    </div>
  );
 }
}


  const { bool } = PropTypes;
  NotFoundPage.propTypes = {};



export default NotFoundPage;
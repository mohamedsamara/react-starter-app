/*
 *
 * Application
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import actions from '../../actions.js';
import messages from './messages';
import styles from './styles.css';

export class Application extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.application}>
        <Helmet
          title='Application'
          meta={[
            { name: 'description', content: 'Description of Application' }
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const { bool } = PropTypes;
Application.propTypes = {};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  actions
)(Application);

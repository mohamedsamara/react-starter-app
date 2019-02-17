/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import actions from '../../actions';
import messages from './messages';
import styles from './styles.css';

export class Login extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className={styles.login}>
        <Helmet
          title="Login"
          meta={[{ name: 'description', content: 'Description of Login' }]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const { bool } = PropTypes;
Login.propTypes = {};

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Login);

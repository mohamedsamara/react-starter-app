/*
 *
 * Navigation
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import actions from '../../actions';
import messages from './messages';
import styles from './styles.css';
import NavigationDrawer from '../../components/NavigationDrawer';

export class Navigation extends React.Component {
  render() {
    const { toggleDrawer, isDrawerOpen } = this.props;

    return (
      <div className="navigation">
        <NavigationDrawer
          toggleDrawer={(side, open) => toggleDrawer(side, open)}
          isDrawerOpen={isDrawerOpen}
        />
      </div>
    );
  }
}

Navigation.propTypes = {};

const mapStateToProps = state => {
  return {
    isDrawerOpen: state.navigation.isDrawerOpen,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Navigation);

/*
 *
 * TopHeader
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions';

import Header from '../../components/Header';
import { anchorEl } from './types';

export class TopHeader extends React.Component {
  componentDidMount() {}

  render() {
    const { anchorEl, openMenu, closeMenu, setLocale } = this.props;

    return (
      <Header
        openMenu={target => openMenu(target)}
        closeMenu={() => closeMenu()}
        anchorEl={anchorEl}
        setLocale={lang => setLocale(lang)}
      />
    );
  }
}

const { func } = PropTypes;

TopHeader.propTypes = {
  openMenu: func.isRequired,
  closeMenu: func.isRequired,
  anchorEl: anchorEl,
};

const mapStateToProps = state => {
  return {
    anchorEl: state.header.anchorEl,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(TopHeader);

/*
 *
 * LanguageProvider
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

import actions from '../../actions';

export class LanguageProvider extends React.Component {
  componentDidMount() {}

  render() {
    const { locale, messages } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const { string, object, element } = PropTypes;

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = state => {
  return {
    locale: state.langauge.locale,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(LanguageProvider);

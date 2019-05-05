/*
 *
 * LanguageProvider
 *
 */

import { IntlProvider } from 'react-intl';
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import actions from '../../actions';

export class LanguageProvider extends React.Component {
  componentDidMount() {
    if (localStorage.appLang) {
      this.props.setLocale(localStorage.appLang);
    }
  }

  render() {
    const { locale, messages } = this.props;

    return (
      <div>
        <Helmet>
          <html lang={locale} />
          <body className={`${locale}-style`} />
        </Helmet>
        <IntlProvider locale={locale} messages={messages[locale]}>
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </div>
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

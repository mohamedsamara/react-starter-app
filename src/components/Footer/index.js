/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import messages from './messages';
import styles from './styles.css';

const Footer = props => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: 'contact' },
    { id: 1, name: 'Returns', to: 'return' },
    { id: 2, name: 'Shipping', to: 'shipping' },
  ];

  const footerBusinessLinks = (
    <ul className="support-links">
      <li className="footer-link">
        <FormattedMessage {...messages.signup}>
          {txt => <Link to="/signup">{txt}</Link>}
        </FormattedMessage>
      </li>
      <li className="footer-link">
        <FormattedMessage {...messages.signin}>
          {txt => <Link to="/login">{txt}</Link>}
        </FormattedMessage>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className="footer-link">
      <FormattedMessage
        id={`src.components.Footer.${item.to}`}
        key={`${item.id}`}
      >
        {message => <Link to={`/${item.to}`}>{message}</Link>}
      </FormattedMessage>
    </li>
  ));

  const { isPrivate } = props;

  return (
    <footer className="footer">
      <Container>
        {isPrivate ? (
          <div className="contact-us-block">Connect With Us !</div>
        ) : (
          <div className="footer-content">
            <div className="footer-block">
              <div className="block-title">
                <FormattedMessage {...messages.blockOne}>
                  {txt => <h2>{txt}</h2>}
                </FormattedMessage>
              </div>
              <div className="block-content">
                <ul>{footerLinks}</ul>
              </div>
            </div>
            <div className="footer-block">
              <div className="block-title">
                <FormattedMessage {...messages.blockTwo}>
                  {txt => <h2>{txt}</h2>}
                </FormattedMessage>
              </div>
              <div className="block-content">
                <ul>{footerLinks}</ul>
              </div>
            </div>
            <div className="footer-block">
              <div className="block-title">
                <FormattedMessage {...messages.blockThree}>
                  {txt => <h2>{txt}</h2>}
                </FormattedMessage>
              </div>
              <div className="block-content">{footerBusinessLinks}</div>
            </div>
          </div>
        )}
        <div className="footer-copyright">
          <span>© {new Date().getFullYear()} React Starter Application</span>
        </div>
        <ul className="footer-social-item">
          <li>
            <a href="/#facebook" rel="noreferrer noopener" target="_blank">
              <span className="facebook-icon" />
            </a>
          </li>
          <li>
            <a href="/#instagram" rel="noreferrer noopener" target="_blank">
              <span className="instagram-icon" />
            </a>
          </li>
          <li>
            <a href="/#pinterest" rel="noreferrer noopener" target="_blank">
              <span className="pinterest-icon" />
            </a>
          </li>
          <li>
            <a href="/#twitter" rel="noreferrer noopener" target="_blank">
              <span className="twitter-icon" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

const { bool } = PropTypes;
Footer.propTypes = {
  isPrivate: bool,
};

export default Footer;

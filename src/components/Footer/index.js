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
  let infoLinks = [
    { name: 'Contact Us', to: 'contact-us' },
    { name: 'Returns', to: 'return' },
    { name: 'Shipping', to: 'shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to={'/signup'}>Signup</Link>
      </li>
      <li className='footer-link'>
        <Link to={'/login'}>Login</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map((item, index) => (
    <li key={index} className='footer-link'>
      <Link to={`/${item.to}`}>{item.name}</Link>
    </li>
  ));

  const { isPrivate } = props;

  return (
    <footer className='footer'>
      <Container>
        {isPrivate ? (
          <div className='contact-us-block'>Connect With Us !</div>
        ) : (
          <div className='footer-content'>
            <div className='footer-block'>
              <div className='block-title'>
                <h2>Customer Service</h2>
              </div>
              <div className='block-content'>
                <ul>{footerLinks}</ul>
              </div>
            </div>
            <div className='footer-block'>
              <div className='block-title'>
                <h2>Links</h2>
              </div>
              <div className='block-content'>
                <ul>{footerLinks}</ul>
              </div>
            </div>
            <div className='footer-block'>
              <div className='block-title'>
                <h2>Newsletter</h2>
              </div>
              <div className='block-content'>{footerBusinessLinks}</div>
            </div>
          </div>
        )}

        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} boilerplate</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <span className='facebook-icon' />
            <a href='/facebook.com/' rel='noreferrer' target='_blank' />
          </li>
          <li>
            <span className='instagram-icon' />
            <a href='/instagram.com/' rel='noreferrer' target='_blank' />
          </li>
          <li>
            <span className='pinterest-icon' />
            <a href='/pinterest.com/' rel='noreferrer' target='_blank' />
          </li>
          <li>
            <span className='twitter-icon' />
            <a href='/twitter.com/' rel='noreferrer' target='_blank' />
          </li>
        </ul>
      </Container>
    </footer>
  );
};

const { bool } = PropTypes;
Footer.propTypes = {
  isPrivate: bool
};

export default Footer;

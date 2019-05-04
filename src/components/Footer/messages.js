/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'src.components.Footer';

export default defineMessages({
  blockOne: {
    id: `${scope}.blockOne`,
    defaultMessage: 'Customer Service',
  },
  blockTwo: {
    id: `${scope}.blockTwo`,
    defaultMessage: 'Links',
  },
  blockThree: {
    id: `${scope}.blockThree`,
    defaultMessage: 'Newsletter',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'SignUp',
  },
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'SignIn',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact Us',
  },
  return: {
    id: `${scope}.return`,
    defaultMessage: 'Returns',
  },
  shipping: {
    id: `${scope}.shipping`,
    defaultMessage: 'Shipping',
  },
});

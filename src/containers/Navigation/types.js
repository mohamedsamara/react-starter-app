/*
 *
 * Navigation
 *
 */

// import propType definitions
import { shape, bool, string } from 'prop-types';

export const isDrawerOpen = shape({
  side: string,
  open: bool,
});

/*
 *
 * Post types
 *
 */

// import propType definitions
import { shape, number, string, arrayOf } from 'prop-types';

export const post = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export const posts = arrayOf(shape(post));

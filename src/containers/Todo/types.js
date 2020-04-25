/*
 *
 * Todo types
 *
 */

// import propType definitions
import { shape, number, bool, string, arrayOf } from 'prop-types';

export const todo = {
  userId: number,
  id: number,
  title: string,
  completed: bool,
};

export const todos = arrayOf(shape(todo));

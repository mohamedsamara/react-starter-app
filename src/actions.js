/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as navigation from './containers/Navigation/thunks';
import * as todo from './containers/Todo/thunks';
import * as post from './containers/Post/thunks';
import * as header from './containers/TopHeader/thunks';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...navigation,
      ...todo,
      ...post,
      ...header,
    },
    dispatch,
  );
}

/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';

import * as app from './containers/Application/thunks';

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...app
    },
    dispatch
  );
}

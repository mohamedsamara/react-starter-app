/*
 * 
 * Login
 * 
 */


// Do this in every file where you use `fetch`
import fetch from 'cross-fetch'
import validator from "validator";
import { toastr } from 'react-redux-toastr';
import { push, goBack } from 'connected-react-router';


import {} from './actions';


/*
export function fetch() {
  return function(dispatch, getState) {
    return fetch('', {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
      })
      .catch(error => {});
  };
}
*/

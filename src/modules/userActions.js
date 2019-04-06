import { SET_CURRENT_USER_DATA } from './actionTypes';
import axios from 'axios';
import { SOLUTIONS_USER_API } from '../config';

export function setUserData(userData) {
  return {
    type: SET_CURRENT_USER_DATA,
    userData: userData
  };
}

export function postUser(userToAdd) {
  return function(dispatch) {
    return axios.post(SOLUTIONS_USER_API, userToAdd).then(response => {
      console.log('trying to create user with status ' + response.status);
      if (response.status === 201 || response.status === 402) {
        dispatch(setUserData(userToAdd));
      }
    });
  };
}

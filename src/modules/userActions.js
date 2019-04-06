import { SET_CURRENT_USER_DATA } from './actionTypes';

export function setUserData(userData) {
  return {
    type: SET_CURRENT_USER_DATA,
    userData: userData
  };
}

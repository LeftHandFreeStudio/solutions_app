import { SET_CURRENT_USER_DATA } from './actionTypes';

const defaultUser = {
  username: ''
};

export function user(state = defaultUser, action) {
  switch (action.type) {
    case SET_CURRENT_USER_DATA:
      return Object.assign({}, state, action.userData);
    default:
      return state;
  }
}

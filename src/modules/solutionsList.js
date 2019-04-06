import {
  FETCH_SOLUTIONS,
  ADD_SOLUTION,
  RECEIVE_SOLUTIONS
} from './actionTypes';

/*
STATE SHAPE

{
  userSolutions:{
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: []
  }
}

*/

const defaultUserSolutions = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: 0,
  items: []
};

export const userSolutions = (state = defaultUserSolutions, action) => {
  switch (action.type) {
    case FETCH_SOLUTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_SOLUTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: [...state.items, ...action.solutions]
      });
    case ADD_SOLUTION:
      return Object.assign({}, state, {
        items: [...state.items, action.solution]
      });
    default:
      return state;
  }
};

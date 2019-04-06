import { ADD_SOLUTION } from './actions';

export const userSolutions = (state = [], action) => {
  if (action.type === ADD_SOLUTION) {
    return [...state, action.solution];
  } else {
    return state;
  }
};

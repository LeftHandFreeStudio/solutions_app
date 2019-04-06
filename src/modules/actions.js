import { ADD_SOLUTION } from './actionTypes';

export const addUserSolution = solution => {
  return {
    type: ADD_SOLUTION,
    solution: solution
  };
};

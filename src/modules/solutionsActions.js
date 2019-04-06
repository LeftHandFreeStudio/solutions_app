import {
  FETCH_SOLUTIONS,
  ADD_SOLUTION,
  RECEIVE_SOLUTIONS,
  SAVE_SOLUTION
} from './actionTypes';
import axios from 'axios';
import { SOLUTIONS_API } from '../config';

export const addUserSolution = solution => {
  return {
    type: ADD_SOLUTION,
    solution: solution
  };
};

export function requestSolutions() {
  return {
    type: FETCH_SOLUTIONS
  };
}

export function requestSolutionSave(solutionToSave) {
  return {
    type: SAVE_SOLUTION,
    newSolution: solutionToSave
  };
}

export function receiveSolutions(fetchedSolutions) {
  return {
    type: RECEIVE_SOLUTIONS,
    solutions: fetchedSolutions
  };
}

export function postSolution(solutionToAdd) {
  return function(dispatch) {
    return axios.post(SOLUTIONS_API, solutionToAdd).then(response => {
      dispatch(requestSolutionSave(solutionToAdd));
      console.log('trying to create solution with status ' + response.status);
    });
  };
}

export function fetchSolutions(targetUsername) {
  return function(dispatch) {
    dispatch(requestSolutions());
    return axios.get(SOLUTIONS_API).then(response => {
      const userSolutions = response.data.filter(solution => {
        return solution.user === targetUsername;
      });
      dispatch(receiveSolutions(userSolutions));
    });
  };
}

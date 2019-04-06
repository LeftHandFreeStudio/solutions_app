import {
  FETCH_SOLUTIONS,
  ADD_SOLUTION,
  RECEIVE_SOLUTIONS
} from './actionTypes';
import axios from 'axios';

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

export function receiveSolutions(fetchedSolutions) {
  return {
    type: RECEIVE_SOLUTIONS,
    solutions: fetchedSolutions
  };
}

export function fetchSolutions(targetUsername) {
  return function(dispatch) {
    dispatch(requestSolutions());
    return axios
      .get(
        'https://elkkfnoggi.execute-api.us-east-1.amazonaws.com/default/mka_todos'
      )
      .then(response => {
        const userSolutions = response.data.filter(solution => {
          return solution.user === targetUsername;
        });
        dispatch(receiveSolutions(userSolutions));
      });
  };
}

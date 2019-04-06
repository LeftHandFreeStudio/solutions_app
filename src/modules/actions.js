export const ADD_SOLUTION = 'add_solution';

export const addUserSolution = solution => {
  return {
    type: ADD_SOLUTION,
    solution: solution
  };
};

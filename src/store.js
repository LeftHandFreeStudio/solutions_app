import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userSolutions } from './modules/solutionsList';
import { user } from './modules/user';

/*
STATE SHAPE

{
  user:{
    username:"Max"
  }
  userSolutions:{
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: []
  }
}

*/

const solutionsApp = combineReducers({ userSolutions, user });
export const store = createStore(
  solutionsApp,
  applyMiddleware(thunkMiddleware)
);

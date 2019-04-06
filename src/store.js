import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './modules/solutionsList';

const solutionsApp = combineReducers(reducers);

export const store = createStore(
  solutionsApp,
  applyMiddleware(thunkMiddleware)
);

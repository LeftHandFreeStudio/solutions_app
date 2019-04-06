import { createStore, combineReducers } from 'redux';
import * as reducers from './modules/solutionsList';

const solutionsApp = combineReducers(reducers);
export const store = createStore(solutionsApp);

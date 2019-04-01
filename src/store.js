import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

const solutionsApp = combineReducers(reducers);
export const store = createStore(solutionsApp);

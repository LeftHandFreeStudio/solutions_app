import { createStore, combineReducers } from 'redux';
import * as reducers from './modules/reducers';

const solutionsApp = combineReducers(reducers);
export const store = createStore(solutionsApp);

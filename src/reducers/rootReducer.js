import { combineReducers } from 'redux';
import { formsReducer } from './forms';
import { moviesReducer } from './movies';

export const rootReducer = combineReducers({
    forms: formsReducer,
    movies: moviesReducer,
});
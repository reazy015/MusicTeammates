import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import teammates from './teammates';


export const reducers = combineReducers({
	routing: routerReducer,
	teammates: teammates,
})

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import teammates from './teammates';
import add from './add';


export const reducers = combineReducers({
	routing: routerReducer,
	teammates: teammates,
	add: add,
})

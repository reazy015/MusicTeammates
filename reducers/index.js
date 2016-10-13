import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import InititalData from './initial-state-reducer';
import ActiveTeammateReducer from './active-teammate-reducer';
import InviteTeammate from './invite-teammate-reducer';

const allReducers = combineReducers({
	inititalUsers: InititalData,
	activeTeammate: ActiveTeammateReducer,
	inviteTeammate: InviteTeammate,
	routing: routerReducer,
}); 

export default allReducers;
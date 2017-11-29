import { combineReducers } from 'redux';

import { userReducer } from './modules/User';

const reducers = combineReducers({
	user: userReducer
});

export default reducers;

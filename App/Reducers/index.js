import { combineReducers, createStore } from 'redux';

import authReducer from './AuthReducer'
import feedReducer from './FeedReducer'
//Mainatians State off all the reducers in the store
const AppReducers = combineReducers({
    authReducer,
    feedReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;
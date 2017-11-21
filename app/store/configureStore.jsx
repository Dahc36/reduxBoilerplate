import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer,todosReducer,showCompletedReducer,authReducer} from 'reducers';

export let configure = (initialState = {}) => {
	let reducer = redux.combineReducers({
		searchText: searchTextReducer,
		todos: todosReducer,
		showCompleted: showCompletedReducer,
		auth: authReducer
	});

	let store = redux.createStore(reducer, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};
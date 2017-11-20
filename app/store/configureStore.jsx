let redux = require('redux');
let thunk = require('redux-thunk').default;
let {searchTextReducer,todosReducer,showCompletedReducer} = require('reducers')

export let configure = () => {

	let reducer = redux.combineReducers({
		searchText: searchTextReducer,
		todos: todosReducer,
		showCompleted: showCompletedReducer
	});

	let store = redux.createStore(reducer, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};
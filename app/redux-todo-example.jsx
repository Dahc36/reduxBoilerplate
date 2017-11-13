let redux = require('redux');

console.log('Starting redux example');

let stateDefault = {
	todos: [],
	searchText: '',
	showCompleted: false
};

let reducer = (state = stateDefault, action) => {
	
	return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();

console.log(currentState);
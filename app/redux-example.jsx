let redux = require('redux');

console.log('Starting redux example');

let reducer = (state = {name: 'Anonymous'}, action) => {
	
	return state;
};

let store = redux.createStore(reducer);

let currentState = store.getState();

console.log(currentState);
let redux = require('redux');

console.log('Starting redux example');

let reducer = (state = {name: 'Anonymous'}, action) => {
	console.log('New action', action);
	switch(action.type){
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		default:
			return state;
	}
};

let store = redux.createStore(reducer);

console.log(store.getState());

let action = {
	type: 'CHANGE_NAME',
	name: 'Lokohanks'
}

store.dispatch(action);
console.log(store.getState());
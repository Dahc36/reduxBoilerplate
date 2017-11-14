let redux = require('redux');

console.log('Starting redux example');

let stateDefault = {
	todos: [],
	searchText: '',
	showCompleted: false
};

let reducer = (state = stateDefault, action) => {
	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}
};

let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
	let state = store.getState();
	console.log(state.searchText);
});
// unsubscribe();


let changeSearchText = (text) => {
	store.dispatch({
		type: 'CHANGE_SEARCH_TEXT',
		searchText: text
	});
}

changeSearchText('Hello');
changeSearchText('World');
changeSearchText('!');



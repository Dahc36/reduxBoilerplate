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

let store = redux.createStore(reducer);

console.log(store.getState());

let changeSearchText = (text) => {
	store.dispatch({
		type: 'CHANGE_SEARCH_TEXT',
		searchText: text
	});
}

changeSearchText('hello');
console.log(store.getState());



let redux = require('redux');

console.log('Starting redux example');

let stateDefault = {
	todos: [],
	searchText: '',
	showCompleted: false
};

let count = 0;
let reducer = (state = stateDefault, action) => {
	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{id: count++,text: action.todo}
				]
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
	console.log(store.getState());
});
// unsubscribe();


let changeSearchText = (text) => {
	store.dispatch({
		type: 'CHANGE_SEARCH_TEXT',
		searchText: text
	});
}

let addTodo = (todo) => {
	store.dispatch({
		type: 'ADD_TODO',
		todo: todo
	});
}

changeSearchText('Hello');
changeSearchText('World');
changeSearchText('!');
addTodo('Hello');
addTodo('World');
addTodo('!');


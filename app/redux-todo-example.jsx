let redux = require('redux');

console.log('Starting redux example');

let stateDefault = {
	todos: [],
	searchText: '',
	showCompleted: false
};

let count = 0;
let oldReducer = (state = stateDefault, action) => {
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
		case 'REMOVE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id)
			};
		default:
			return state;
	}
};

let searchTextReducer = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
}

let todosReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{id: count++,text: action.todo}
			];
		case 'REMOVE_TODO':
			return state.filter((todo) => todo.id !== action.id);
		default:
			return state;
	}
};

let showCompletedReducer = (state = false, action) => {
	switch(action.type){
		case 'CHANGE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
};

let reducer = redux.combineReducers({
	searchText: searchTextReducer,
	todos: todosReducer,
	showCompleted: showCompletedReducer
});

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

let removeTodo = (id) => {
	store.dispatch({
		type: 'REMOVE_TODO',
		id: id
	});
}

changeSearchText('Hello');
changeSearchText('World');
changeSearchText('!');
addTodo('Hello');
addTodo('World');
addTodo('!');
removeTodo(1);


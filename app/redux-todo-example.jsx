let redux = require('redux');
let axios = require('axios');

console.log('Starting redux example');

let searchTextReducer = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
}

let count = 0;
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

let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch(action.type){
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined
			};
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url
			};
		default:
			return state;
	}
};

let reducer = redux.combineReducers({
	searchText: searchTextReducer,
	todos: todosReducer,
	showCompleted: showCompletedReducer,
	map: mapReducer
});

let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});
// unsubscribe();


let changeSearchText = (searchText) => {
	return {
		type: 'CHANGE_SEARCH_TEXT',
		searchText
	}
};

let addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	}
};

let removeTodo = (id) => {
	return {
		type: 'REMOVE_TODO',
		id
	}
};

let startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
};

let completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
};

let fetchLocation = () => {
	store.dispatch(startLocationFetch());
	axios.get('http://ipinfo.io/json').then(function(data){
		// console.log(data.data);
		let loc = data.data.loc;
		let baseUrl = 'http://maps.google.com?q=';
		store.dispatch(completeLocationFetch(baseUrl+loc));
	});

};

store.dispatch(changeSearchText('Hello'));
store.dispatch(changeSearchText('World'));
store.dispatch(changeSearchText('!'));
store.dispatch(addTodo('Hello'));
store.dispatch(addTodo('World'));
store.dispatch(addTodo('!'));
store.dispatch(removeTodo(1));

fetchLocation();
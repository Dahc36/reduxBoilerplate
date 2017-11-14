let uuid = require('node-uuid');

export let searchTextReducer = (state = '', action) => {
	switch(action.type){
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
}

let count = 0;
export let todosReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{id: uuid(), text: action.text, completed: false}
			];
		case 'TOGGLE_TODO':
			let tempTodo = state.filter((todo) => todo.id === action.id)[0]
			return 
			[
				...state.filter((todo) => todo.id !== action.id),
				{
					...tempTodo,
					completed: !tempTodo.comlpeted
				}
			];
		default:
			return state;
	}
};

export let showCompletedReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
};
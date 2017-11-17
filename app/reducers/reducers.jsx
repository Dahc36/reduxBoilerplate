let uuid = require('node-uuid');

export let searchTextReducer = (state = '', action) => {
	switch(action.type){
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
}

export let todosReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{id: uuid(), text: action.text, completed: false}
			];
		case 'TOGGLE_TODO':
			return state.map((todo) => {
				if(todo.id === action.id){
					return {
						...todo,
						completed: !todo.completed;
					};
				} else {
					return todo;
				}
			});
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
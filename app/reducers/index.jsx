export let searchTextReducer = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
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
				{id: count++,text: action.todo}
			];
		case 'REMOVE_TODO':
			return state.filter((todo) => todo.id !== action.id);
		default:
			return state;
	}
};

export let showCompletedReducer = (state = false, action) => {
	switch(action.type){
		case 'CHANGE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
};

export let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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
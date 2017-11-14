export let setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
};

export let addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	}
};

export let toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
};

export let toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
}
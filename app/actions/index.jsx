let axios = require('axios');

export let changeSearchText = (searchText) => {
	return {
		type: 'CHANGE_SEARCH_TEXT',
		searchText
	}
};

export let addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	}
};

export let removeTodo = (id) => {
	return {
		type: 'REMOVE_TODO',
		id
	}
};

export let startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
};

export let completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
};

export let fetchLocation = () => {
	return (dispatch, getState) => {
		dispatch(startLocationFetch());
		axios.get('http://ipinfo.io/json').then(function(data){
			// console.log(data.data);
			let loc = data.data.loc;
			let baseUrl = 'http://maps.google.com?q=';
			dispatch(completeLocationFetch(baseUrl+loc));
		});
	};
};
let $ = require('jquery');

module.exports = {
	setTodos: function(todos){
		if($.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function(){
		let stringTodos = localStorage.getItem('todos');
		let todos = [];
		try {
			todos = JSON.parse(stringTodos);
		} catch(e){
			console.log(e);
		}
		return $.isArray(todos) ? todos: [];
	},
	filterTodos: function(todos,searchText,showCompleted){
		let filteredTodos = todos;
		// Filter
		filteredTodos = filteredTodos.filter((todo) => {
			return (
				// Completed
				(showCompleted || !todo.completed) &&
				// TextSearch
				(searchText === '' ||
				todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
			);
		});
		// OrderBy completed
		filteredTodos.sort((a,b) => {
			if(a.completed === b.completed){
				return 0;
			} else {
				return a.completed ? 1 : -1;
			}
		});
		return filteredTodos;
	}
}
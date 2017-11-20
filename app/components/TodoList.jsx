let React = require('react');
let {connect} = require('react-redux');

let Todo = require('Todo');
let TodoAPI = require('TodoAPI');

let TodoList = React.createClass({
	render: function(){
		let {todos, showCompleted, searchText} = this.props;
		let filteredTodos = TodoAPI.filterTodos(todos, searchText, showCompleted);
		let renderTodos = () => {
			if(filteredTodos.length === 0){
				return <p className="container__message">Nothing To Do</p>
			} else {
				return filteredTodos.map((todo) => {
					return (
						<Todo key={todo.id} {...todo}/>
					);
				});
			}
		};
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = connect(
	(state) => {
		return state;
	}
)(TodoList);
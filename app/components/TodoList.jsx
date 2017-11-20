let React = require('react');
let {connect} = require('react-redux');
let Todo = require('Todo');

let TodoList = React.createClass({

	render: function(){
		let {todos} = this.props;
		let renderTodos = () => {
			if(todos.length === 0){
				return <p className="container__message">Nothing To Do</p>
			} else {
				return todos.map((todo) => {
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
		return {
			todos: state.todos
		};
	}
)(TodoList);
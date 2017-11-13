let React = require('react');
let Todo = require('Todo');

let TodoList = React.createClass({
	render: function(){
		let {todos, onToggle} = this.props;
		let renderTodos = () => {
			if(todos.length === 0){
				return <p className="container__message">Nothing To Do</p>
			} else {
				return todos.map((todo) => {
					return (
						<Todo key={todo.id} {...todo} onToggle={onToggle}/>
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

module.exports = TodoList;
let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

let Todo = React.createClass({
	render: function(){
		let {id, text, completed, dispatch} = this.props;
		let todoClassName = completed ? 'todo todo-completed' : 'todo';
		return (
			<div className={todoClassName}>
				<label>
					<input type="checkbox" checked={completed}
						onChange={() => {dispatch(actions.startToggleTodo(id,!completed));}}/>
					<p>{text}</p>
				</label>
			</div>
		);
	}
});

module.exports = connect()(Todo);
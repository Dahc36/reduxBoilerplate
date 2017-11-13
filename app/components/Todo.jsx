let React = require('react');

let Todo = React.createClass({
	render: function(){
		let {id, text, completed, onToggle} = this.props;
		let todoClassName = completed ? 'todo todo-completed' : 'todo';
		return (
			<div className={todoClassName}>
				<label>
					<input type="checkbox" checked={completed} onChange={() => {onToggle(id);}}/>
					<p>{text}</p>
				</label>
			</div>
		);
	}
});

module.exports = Todo;
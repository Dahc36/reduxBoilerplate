let React = require('react');

let AddTodo = React.createClass({
	propTypes: {
		onAddTodo: React.PropTypes.func.isRequired
	},
	onAddTodo: function(e){
		e.preventDefault();
		let text = this.refs.text.value;
		if(text !== ''){
			this.refs.text.value = '';
			this.props.onAddTodo(text);
		} else {
			this.refs.text.focus();
		}
	},
	render: function(){
		return (
			<div className="container__footer">
				<form onSubmit={this.onAddTodo}>
					<input type="text" ref="text" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;
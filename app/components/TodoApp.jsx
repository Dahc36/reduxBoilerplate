let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

let Search = require('Search');
let AddTodo = require('AddTodo');
let TodoList = require('TodoList');

let TodoApp = React.createClass({
	onLogout: function(e){
		let {dispatch} = this.props;
		e.preventDefault();
		dispatch(actions.startLogout());
	},
	render: function(){
		return (
			<div>
				<div className="page-actions">
					<a href="#" onClick={this.onLogout}>Logout</a>
				</div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<Search/>
							<TodoList/>
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = connect()(TodoApp);
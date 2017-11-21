let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

let Login = React.createClass({
	onLogin: function() {
		let {dispatch} = this.props;
		dispatch(actions.startLogin());
	},
	render: function(){
		return (
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="columns small-centered small-10 medium-6 large-4">
						<div className="callout callout-auth">
							<h3>Login</h3>
							<p>
								Login with Google account
							</p>
							<button className="button" onClick={this.onLogin}>Login</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = connect()(Login);
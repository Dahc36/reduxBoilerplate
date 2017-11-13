let React = require('react');

let Search = React.createClass({
	propTypes: {
		onSearch: React.PropTypes.func.isRequired
	},
	onSearch: function(){
		let searchText = this.refs.searchText.value;
		let showCompleted = this.refs.showCompleted.checked;
		this.props.onSearch(searchText,showCompleted);
	},
	render: function(){
		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search Todos" onChange={this.onSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" onChange={this.onSearch}/>
						Show completed Todos
					</label>
				</div>
			</div>
		);
	}
});

module.exports = Search;
let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let TodoApp = require('TodoApp');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
		
	</div>,
	document.getElementById('app')
);

require('./redux-todo-example.jsx');
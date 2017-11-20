let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');
let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');

store.subscribe(() => {
	let state = store.getState();
	console.log(state);
});

store.dispatch(actions.startAddTodos());

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
		<Provider store={store}>
			<TodoApp/>
		</Provider>
	</div>,
	document.getElementById('app')
);
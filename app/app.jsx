let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {hashHistory} = require('react-router');

let actions = require('actions');
let store = require('configureStore').configure();
import firebase from 'app/firebase/firebase.js';
import router from 'app/router/router.jsx';

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		store.dispatch(actions.login(user.uid));
		hashHistory.push('/todos');
	} else {
		store.dispatch(actions.logout());
		hashHistory.push('/');
	}
});

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
			{router}
		</Provider>
	</div>,
	document.getElementById('app')
);
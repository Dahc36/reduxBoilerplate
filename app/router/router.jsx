let React = require('react');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');
let Main = require('Main');
let Login = require('Login');

import firebase from 'app/firebase/firebase.js'

let requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser){
		replace('/');
	}
	next();
}

let redirectIfLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser){
		replace('/todos');
	}
	next();
}

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="todos" component={TodoApp} onEnter={requireLogin}/>
			<IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
		</Route>
	</Router>
);
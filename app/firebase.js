import firebase from 'firebase';

console.log('Running firebase...');

var config = {
  apiKey: "AIzaSyDkat4lUXErHMgMDlju8rHko_FTelJCmVA",
  authDomain: "todo-app-lokohanks.firebaseapp.com",
  databaseURL: "https://todo-app-lokohanks.firebaseio.com",
  projectId: "todo-app-lokohanks",
  storageBucket: "todo-app-lokohanks.appspot.com",
  messagingSenderId: "591323340366"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '0.0.0'
	},
	isRunning: true,
	user: {
		name: 'Hans',
		age: 28
	}
});

let todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot) =>{
	console.log(snapshot.key,snapshot.val());
});

todosRef.push({text: 'Walk the dog!'});
todosRef.push({text: 'Clean the yard'});

console.log('Done with firebase');
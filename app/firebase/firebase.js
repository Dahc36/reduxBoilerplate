import firebase from 'firebase';

try{
	var config = {
		apiKey: "AIzaSyDkat4lUXErHMgMDlju8rHko_FTelJCmVA",
		authDomain: "todo-app-lokohanks.firebaseapp.com",
		databaseURL: "https://todo-app-lokohanks.firebaseio.com",
		projectId: "todo-app-lokohanks",
		storageBucket: "todo-app-lokohanks.appspot.com",
		messagingSenderId: "591323340366"
	};
	firebase.initializeApp(config);
} catch(e){

}

export let firebaseRef = firebase.database().ref();
export default firebase;
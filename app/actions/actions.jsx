import firebase, {firebaseRef, googleProvider} from 'app/firebase/firebase.js'

export let setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
};

export let addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	}
};

export let startAddTodo = (text) => {
	return (dispatch, getState) => {
		let newTodo = {
			text,
			completed: false
		};
		let todoRef = firebaseRef.child('todos').push(newTodo);

		todoRef.then(() => {
			dispatch(addTodo({
				...newTodo,
				id: todoRef.key
			}));
		});
	};
}

export let updateTodo = (id, completed) => {
	return {
		type: 'UPDATE_TODO',
		id,
		completed
	}
};

export let startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		let todoRef = firebaseRef.child('todos/'+id);

		todoRef.update({
			completed
		}).then(() => {
			dispatch(updateTodo(id, completed))
		});
	};
};

export let addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	}
};

export let startAddTodos = (todos) => {
	return (dispatch, getState) => {
		let todosRef = firebaseRef.child('todos');
		let todosList = [];

		todosRef.once('value',(snapshot) => {
			let todosValues = snapshot.val() || {};
			for(let key in todosValues){
				// console.log(key, todosValues[key]);
				todosList.push({
					...todosValues[key],
					id: key
				});
			}
		}).then(() => {
			dispatch(addTodos(todosList));
		});
	};
};

export let toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
}

export let startLogin = () => {
	return (dispatch, getState) => {
		firebase.auth().signInWithPopup(googleProvider).then((data) => {
			console.log(data);
			var token = data.credential.accessToken;
			var user = data.user;
		}).catch((error) => {
			console.log(error)
		});
	}
}

export let startLogout = () => {
	return (dispatch, getState) => {
		firebase.auth().signOut().then(function() {
			console.log('Logged out');
		}).catch(function(error) {
			console.log(error);
		});
	}
}
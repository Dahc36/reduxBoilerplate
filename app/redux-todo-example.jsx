let actions = require('actions');
let store = require('./store/configureStore').configure();

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});
// unsubscribe();


store.dispatch(actions.changeSearchText('Hello'));
store.dispatch(actions.changeSearchText('World'));
store.dispatch(actions.changeSearchText('!'));
store.dispatch(actions.addTodo('Hello'));
store.dispatch(actions.addTodo('World'));
store.dispatch(actions.addTodo('!'));
store.dispatch(actions.removeTodo(1));

store.dispatch(actions.fetchLocation());
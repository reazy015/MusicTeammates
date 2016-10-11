import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import { reducers } from './reducers/index';

// Initital state of app

let teammates = [];
	for (let i=1; i<10; i++) {
		teammates.push({
			id: i,
			first: "John" +i,
			instrument: "guitar" +i,
			city: "Los-Angeles",
		});
	}
const initial_state = { 
	teammates: teammates,
}

const store = createStore(reducers, initial_state);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
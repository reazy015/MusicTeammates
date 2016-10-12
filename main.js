import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import { Provider } from 'react-redux';


import App from './components/app';
import { reducers } from './reducers/index';
import Home from './pages/Home';
import UserAdd from './pages/UserAdd';
import NotFound from './pages/NotFound';

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
let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="user-add(/:id)" component={UserAdd}/>
				<Route path="*" component={NotFound}/>
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'));
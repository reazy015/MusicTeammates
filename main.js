import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/index';
import App from './components/App';

import Home from './pages/Home';
import UserAdd from './pages/UserAdd';
import NotFound from './pages/NotFound'

let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="user-add(/:id)" component={UserAdd}/>
				<Route path="*" component={NotFound}/>
			</Route>
		</Router>
	</Provider>, document.getElementById('root'));
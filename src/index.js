import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const router = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();

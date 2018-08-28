import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const router = (
	<Router>
		<App />
	</Router>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();

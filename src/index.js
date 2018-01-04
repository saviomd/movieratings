import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';

const App = () => {
	return (
		<Router>
			<Layout />
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

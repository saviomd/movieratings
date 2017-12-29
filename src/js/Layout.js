import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import NotFound from './NotFound';
import Ratings from './Ratings';

import '../css/bootstrap.min.css'

const Layout = () => (
	<div className="container-fluid">
		<Header />
		<Switch>
			<Route path="/" exact component={Ratings} />
			<Route component={NotFound} />
		</Switch>
		<Footer />
	</div>
)

export default Layout

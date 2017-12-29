import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Diary from './Diary';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound';
import Ratings from './Ratings';

import '../css/bootstrap.min.css'

const Layout = () => (
	<div className="container-fluid">
		<Header />
		<Nav />
		<Switch>
			<Route path="/" exact component={Ratings} />
			<Route path="/diary" component={Diary} />
			<Route component={NotFound} />
		</Switch>
		<Footer />
	</div>
)

export default Layout

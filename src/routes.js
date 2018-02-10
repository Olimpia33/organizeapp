import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './screens/App';
import HomePage from './screens/home/index.js';
import OrganizerPage from './screens/organizer/index.js';
import ContactPage from './screens/contact/index.js';
import Notes from './components/notes/index';

export default (
	<Route path="/" component={App}>
		<IndexRoute component= {HomePage} />
		<Route path="organizer" component={OrganizerPage} />
		<Route path="notes" component={Notes} />
		<Route path="notes:id" component={Notes} />
		<Route path="contact" component={ContactPage} />
	</Route>
);

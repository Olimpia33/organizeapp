import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './screens/App';
import HomePage from './screens/home/index';
import OrganizerPage from './screens/organizer/index';
import ContactPage from './screens/contact/index';
import SingleNote from './containers/singleNote/index';

export default (
	<Route path="/" component={App}>
		<IndexRoute component= {HomePage} />
		<Route path="organizer" component={OrganizerPage} />
		<Route path="notes" component={SingleNote} />
		<Route path="notes:id" component={SingleNote} />
		<Route path="contact" component={ContactPage} />
	</Route>
);

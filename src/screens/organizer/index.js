import React from 'react';
import PropTypes from 'prop-types';
import Organizer from '../../containers/organizer.js';
import Summary from '../../components/summary/index';

class OrganizerPage extends React.Component {
	render() {
		return (
			<div>	
				<Summary />
				<Organizer/>
			</div>
		);
	}
}

export default OrganizerPage;
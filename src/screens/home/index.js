import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import style from './style.scss';
import globals from '../../styles/globals.scss';
import Button from '../../components/buttons/index.js';

class HomePage extends React.Component {
	render() {
		return (
			<div className={style.main}>	
				<h1>Productive days = Productive life!</h1>
				<h4> Make everyday notes and feel accomplish.</h4>
				<h4>Keep your life in order.</h4>
				<h4>Find time to enjoy your everyday life.</h4>
				<Link to="organizer">
					<Button  value="Go to organizer" className={style.homeButton} />
				</Link>
			</div>
		);
	}
}

export default HomePage;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar/index';
import style from './style.scss';

class Header extends Component {
	render() {
		return (
			<div className={style.wrapper}>
				<p className={style.logo}>{this.props.text}</p>
				<Navbar />
			</div>
		);
	}
}

Header.propTypes = {
	text: PropTypes.string
};

export default Header;

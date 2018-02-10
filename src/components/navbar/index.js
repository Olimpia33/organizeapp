import React, {Component} from  'react';
import PropTypes from 'prop-types';
import {IndexLink, Link} from 'react-router';
import style from './style.scss';

class Navbar extends Component {
	constructor(props){
		super(props);
		this.state = {
			isClicked: false,
			closeMenu: false
		};
	}

	handleClick() {
		const {isClicked} = this.state;
		this.setState({isClicked: !isClicked});
	}

	closeMemnu() {
		this.setState({closeMenu: true});
	}

	render() {

		const { isClicked } = this.state;

		return (
			<div className={isClicked ?
				style.mobileHeader : style.header} >
				<div
					className={style.hamburgerMenu}
					onClick={() => this.handleClick()}
				>
					<a
						className={`${style.hamburgerToggle} ${isClicked ?
						style.active : null}`}
						href="#"
					>
						<span></span>
					</a>
				</div>
				<nav className={isClicked ?
					style.navbarMobile : style.navbar}>
					<IndexLink
						to="/"
						className={isClicked ?
						style.navItemMobile : style.navItem}
						onClick={() => this.closeMenu()}>Home
					</IndexLink>
					<Link
						to="organizer"
						className={isClicked ?
						style.navItemMobile : style.navItem}
						onClick={() => this.closeMenu()}>Organizer
					</Link>
					<Link
						to="contact"
						className={isClicked ?
						style.navItemMobile : style.navItem}
						onClick={() => this.closeMenu()}>Contact
						</Link>
				</nav>
			</div>
		);
	}
}

export default Navbar;

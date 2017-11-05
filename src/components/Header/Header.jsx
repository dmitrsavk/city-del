import React, { Component } from 'react';

import './Header.css';

import {Link} from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='header__logo'>
					Логотип
				</div>
				<div className='header__link-wrap'>
					<Link to={this.props.link.href} className='header__link'>
			        	{this.props.link.text}
			        </Link>
				</div>
			</div>
		);
	}
}

export default Header;

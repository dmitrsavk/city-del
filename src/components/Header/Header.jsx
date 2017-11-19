import React, { Component } from 'react';

import './Header.css';


class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='header__logo'>
					Логотип
				</div>
				{this.props.links}
			</div>
		);
	}
}

export default Header;

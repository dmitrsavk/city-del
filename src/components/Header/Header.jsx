import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Header.css';


class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='header__logo'>	
					<Link to='/' className='header__link'>
				    	City Delivery
					</Link>
				</div>
				{this.props.links}
			</div>
		);
	}
}

export default Header;

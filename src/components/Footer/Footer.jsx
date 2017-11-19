import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footer__content'>	
					<div className='footer__info-item'>
						Email: support@citydeliver.ru
					</div>
					<div className='footer__info-item'>
						Телефон: +7 (964) 782-07-24
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

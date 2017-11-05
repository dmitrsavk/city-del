import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './LandingPage.css';

class LandingPage extends Component {
	render() {
		return (
			<div className='landing-page'>
				<div className='landing-page__header'>
					<Header link={{href: '/order', text: 'Оставить заявку'}}/>
				</div>
				<div className='landing-page__content'>
					<div className='landing-page__section'>
						<span className='landing-page__test'>Landing page</span>
					</div>
				</div>
				<div className='landing-page__footer'>
					<Footer />
				</div>
			</div>
		);
	}
}

export default LandingPage;

import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import SectionOrder from './SectionOrder';

import './MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className='main-page'>
				<div className='main-page__header'>
					<Header link={{href: '/', text: 'На главную'}}/>
				</div>
				<div className='main-page__content'>
					<SectionOrder />
				</div>
				<div className='main-page__footer'>
					<Footer />
				</div>
			</div>
		);
	}
}

export default MainPage;

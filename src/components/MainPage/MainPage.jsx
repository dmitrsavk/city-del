import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import SectionOrder from './SectionOrder';

import './MainPage.css';

class MainPage extends Component {
	getHeaderLinks() {
		return (
			<div className='header__links'>
				<div className='header__link-wrap'>
					<Link to='/' className='header__link'>
				    	О компании
					</Link>
				</div>
			</div>
		);
	}

	render() {
		const headerLinks = this.getHeaderLinks();

		return (
			<div className='main-page'>
				<div className='main-page__header'>
					<Header links={headerLinks} />
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

import React, { Component } from 'react';
import Scroll from 'react-scroll';
import {Link} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import PictureSection from './PictureSection';
import InstructionSection from './InstructionSection';
import DivideSection from './DivideSection';
import FeatureSection from './FeatureSection';
import PriceSection from './PriceSection';
import ContactsSection from './ContactsSection';
import './LandingPage.css';
 
const ScrollLink = Scroll.Link;
const Element  = Scroll.Element;


class LandingPage extends Component {
	getHeaderLinks() {
		return (
			<div className='header__links'>
				<div className='header__link-wrap'>
					<ScrollLink
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className='header__link'
					>
			         	О компании
			        </ScrollLink>
				</div>
				<div className='header__link-wrap'>
					<ScrollLink
						activeClass="active"
						to="price"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className='header__link'
					>
			         	Стоимость
			        </ScrollLink>
				</div>
				<div className='header__link-wrap'>
					<Link to='/order' className='header__link'>
				    	Оформить заказ
					</Link>
				</div>
			</div>
		);
	}

	render() {
		const headerLinks = this.getHeaderLinks();

		return (
			<div className='landing-page'>
				<div className='landing-page__header'>
					<Header links={headerLinks} />
				</div>
				<div className='landing-page__content'>
					<div className='landing-page__section'>
						<PictureSection />
					</div>
					<div className='landing-page__section'>
						<Element name="about">
							<DivideSection />
						</Element>
					</div>
					<div className='landing-page__section'>
						<FeatureSection />
					</div>
					<div className='landing-page__section'>
						<InstructionSection />
					</div>
					<div className='landing-page__section'>
						<Element name="price">
							<PriceSection />
						</Element>
					</div>
					<div className='landing-page__section'>
						<ContactsSection />
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

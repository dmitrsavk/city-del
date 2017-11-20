import React, {Component} from 'react';

import {Parallax} from 'react-parallax';

import './PictureSection.css';
import city from './city.jpeg';

class PictureSection extends Component {
	render() {
		return (
			<div className='picture-section'>
				<Parallax
					bgImage={city}
					strength={300}
					bgWidth='auto'
					bgHeight='100vh'
					className='picture-section__parallax-image'
				>
					<div className='picture-section__parallax-content'>
						<div className='picture-section__parallax-content-header'>
							МИССИЯ НАШЕЙ КОМПАНИИ
						</div>
						<h1 className='picture-section__parallax-content-description'>
							доставка по городу для бизнеса и частных лиц
						</h1>
					</div>
				</Parallax>
			</div>
		);
	}
}

export default PictureSection;

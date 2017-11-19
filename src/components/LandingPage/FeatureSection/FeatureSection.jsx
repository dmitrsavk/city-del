import React, { Component } from 'react';

import './FeatureSection.css';

import speed from '../Speed.svg';
import security from '../Hope.svg';
import cost from '../Cost.svg';

class FeatureSection extends Component {
	render() {
		return (
			<div className='feature-section'>
				<div className='feature-section__header'>
					Особенности нашей компании
				</div>
				<div className='feature-section__subheader'>
					Благодаря системе, по которой мы работаем, у нас есть ряд преимуществ
				</div>
				<div className='feature-section__description'>
					<div className='feature-section__description-item'>
						<div className='feature-section__description-item-header'>
							<div className='feature-section__description-item-header-logo'>
								<img alt='img' src={speed} />
							</div>
							<div className='feature-section__description-item-header-text'>
								Скорость
							</div>
						</div>
						<div className='feature-section__description-item-text'>
							Вам не нужно ждать курьера с другого конца города, система найдет ближайшего к вам,
							что сэкономит немало времени.
						</div>
					</div>
					<div className='feature-section__description-item'>
						<div className='feature-section__description-item-header'>
							<div className='feature-section__description-item-header-logo'>
								<img alt='img' src={security} />
							</div>
							<div className='feature-section__description-item-header-text'>
								Надежность
							</div>
						</div>
						<div className='feature-section__description-item-text'>
							Мы документально оформляем доставку товара, поэтому вы не будете переживать 
							за порчу или потерю.
						</div>
					</div>
					<div className='feature-section__description-item'>
						<div className='feature-section__description-item-header'>
							<div className='feature-section__description-item-header-logo'>
								<img alt='img' src={cost} />
							</div>
							<div className='feature-section__description-item-header-text'>
								Стоимость
							</div>
						</div>
						<div className='feature-section__description-item-text'>
							Благодаря нашей системе, мы добились снижения стоимости на доставку. Для постоянных 
							клиентов мы предлагаем ряд скидок.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FeatureSection;
 

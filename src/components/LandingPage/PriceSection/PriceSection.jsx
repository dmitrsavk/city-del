import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import './PriceSection.css';

import speed from '../FeatureSection/speed.svg';

class PriceSection extends Component {
	render() {
		return (
			<div className='price-section'>
				<div className='price-section__content'>
					<div className='price-section__item'>
						<div className='price-section__item-image'>
							<img alt='img' src={speed} />
						</div>
						<div className='price-section__item-header'>
							Габариты и вес
						</div>
						<div className='price-section__item-description'>
							Максимальный вес посылки не должен превышать 10 кг, а габариты<br/>
							150х100х50 см.
						</div>
					</div>
					<div className='price-section__item'>
						<div className='price-section__item-image'>
							<img alt='img' src={speed} />
						</div>
						<div className='price-section__item-header'>
							Стоимость
						</div>
						<div className='price-section__item-description'>
							<b>В пределах МКАД:</b><br/> 
							<b>200р</b> вызов курьера<br/>
							<b>200р</b> за каждый следующий адрес<br/><br/> 
							<b>За МКАД:</b><br/> 
							вызов курьера от <b>300р</b><br/>
							от <b>300р</b> за каждый следующий адрес<br/> 
							(точную стоимость вам сообщит <br/>оператор)
						</div>
					</div>
				</div>
				<div className='price-section__button-wrap'>
					<Button bsSize='large' href='/order' className='price-section__button'>
				        Оформить заказ
					</Button>
				</div>
			</div>
		);
	}
}

export default PriceSection;
 

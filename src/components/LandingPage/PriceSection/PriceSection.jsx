import React, { Component } from 'react';

import './PriceSection.css';

import gabarit from '../Gabarit.svg';
import cost from '../Cost.svg';

class PriceSection extends Component {
	render() {
		return (
			<div className='price-section'>
				<div className='price-section__content'>
					<div className='price-section__item'>
						<div className='price-section__item-image'>
							<img alt='img' src={gabarit} />
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
							<img alt='img' src={cost} />
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
			</div>
		);
	}
}

export default PriceSection;
 

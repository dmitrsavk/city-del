import React, { Component } from 'react';

import {Button} from 'react-bootstrap';

import './DivideSection.css';

import Business from '../Business.svg';
import Faces from '../Faces.svg';

class DivideSection extends Component {
	render() {
		return (
			<div className='divide-section'>
				<div className='divide-section__columns'>
					<div className='divide-section__column'>
						<div className='divide-section__column-header-logo'>
							<img alt='img' src={Business} />
						</div>
						<div className='divide-section__column-header'>
							Доставка для бизнеса
						</div>
						<div className='divide-section__column-description'>
							Для организаций и предприятий мы осуществляем деловую почту между офисами и 
							партнерами, доставляем письма, документы и иные важные бумаги. Для небольшого 
							бизнеса и частных предпринимателей поможем с поставкой нового товара в магазин, 
							или его доставкой до покупателей.
						</div>
					</div>
					<div className='divide-section__column'>
						<div className='divide-section__column-header-logo'>
							<img alt='img' src={Faces} />
						</div>
						<div className='divide-section__column-header'>
							Доставка для частных лиц
						</div>
						<div className='divide-section__column-description'>
							Забыли ключи или документы, хотите устроить сюрприз для родных и близких? 
							Мы доставим в указанное место и время цветы, торт, шарики или любой другой 
							подарок. Для пожилых или занятых людей мы купим и привезем продукты из 
							магазина или еду из ресторана.
						</div>
					</div>
				</div>
				<div className='divide-section__button-wrap'>
					<Button bsSize='large' href='/order' className='divide-section__button'>
				        Оформить заказ
					</Button>
				</div>
			</div>
		);
	}
}

export default DivideSection;

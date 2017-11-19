import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import './ContactsSection.css';

class ContactsSection extends Component {
	render() {
		return (
			<div className='contacts-section'>
				<div className='contacts-section__header'>
					График работы
				</div>
				<div className='contacts-section__description'>
					Время работы диспетчеров и курьеров<br />
					с 7:00 до 0:00
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

export default ContactsSection;
 

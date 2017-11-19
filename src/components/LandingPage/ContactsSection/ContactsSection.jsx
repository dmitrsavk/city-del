import React, { Component } from 'react';

import './ContactsSection.css';

class ContactsSection extends Component {
	render() {
		return (
			<div className='contacts-section'>
				<div className='contacts-section__header'>
					Контакты
				</div>
				<div className='contacts-section__description'>
					Если у вас есть вопросы и пожелания, вы можете связаться 
					с нами по телефону или электронной почте.
				</div>
				<div className='contacts-section__address'>
					Москва, Садовническая набережная, 69<br/>
					<b>Телефон:</b> 89647820725<br/>
					<b>E-mail:</b> support@citydeliver.ru
				</div>
			</div>
		);
	}
}

export default ContactsSection;
 

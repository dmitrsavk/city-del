import React, { Component } from 'react';

import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import './Form.css';

class Form extends Component {
	render() {
		return (
			<form className='form'>
				<div className='form__label'>Откуда</div>

				<FormGroup
					controlId='address'
					className='form__address'
				>
					<ControlLabel>Адрес</ControlLabel>
					<FormControl
						type='text'
						placeholder='Несвижский переулок, 10'
					/>
				</FormGroup>
				<FormGroup
					controlId='phone'
					className='form__phone'
				>
					<ControlLabel>Телефон</ControlLabel>
					<FormControl
						type='text'
						placeholder='+7 (964) 782-07-25'
					/>
				</FormGroup>
				<FormGroup
					controlId='time'
					className='form__time'
				>
					<ControlLabel>Когда</ControlLabel>
					<FormControl
						type='text'
						placeholder='14:00'
					/>
				</FormGroup>

				<div className='form__label'>Куда</div>

				<FormGroup
					controlId='address'
					className='form__address'
				>
					<ControlLabel>Адрес</ControlLabel>
					<FormControl
						type='text'
						placeholder='Несвижский переулок, 10'
					/>
				</FormGroup>
				<FormGroup
					controlId='phone'
					className='form__phone'
				>
					<ControlLabel>Телефон</ControlLabel>
					<FormControl
						type='text'
						placeholder='+7 (964) 782-07-25'
					/>
				</FormGroup>
				<FormGroup
					controlId='time'
					className='form__time'
				>
					<ControlLabel>Когда</ControlLabel>
					<FormControl
						type='text'
						placeholder='14:00'
					/>
				</FormGroup>

				<div className='form__label'>Информация о заказе</div>

				<FormGroup
					controlId='time'
					className='form__email'
				>
					<ControlLabel>Ваш email</ControlLabel>
					<FormControl
						type='text'
						placeholder='support@citydeliver.ru'
					/>
				</FormGroup>
				<FormGroup
					controlId='info'
					className='form__info'
				>
					<ControlLabel>Пожелания к заказу</ControlLabel>
					<FormControl
						componentClass='textarea'
						placeholder='За час до прибытия курьера позвоните. Будьте аккуратнее, хрупкий товар'
					/>
				</FormGroup>				
			</form>
		);
	}
}

export default Form;
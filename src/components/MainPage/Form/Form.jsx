import React, { Component } from 'react';

import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button
} from 'react-bootstrap';

import './Form.css';

class Form extends Component {
	render() {
		return (
			<form className='form'>
				<div className='form__section'>
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
						<ControlLabel>Время</ControlLabel>
						<FormControl
							type='text'
							placeholder='14:00'
						/>
					</FormGroup>
					<FormGroup
						controlId='time'
						className='form__date'
					>
						<ControlLabel>Дата</ControlLabel>
						<FormControl
							type='text'
							placeholder='Вторник, 12 ноября'
						/>
					</FormGroup>
				</div>

				<div className='form__section'>
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
						<ControlLabel>Время</ControlLabel>
						<FormControl
							type='text'
							placeholder='14:00'
						/>
					</FormGroup>
					<FormGroup
						controlId='time'
						className='form__date'
					>
						<ControlLabel>Дата</ControlLabel>
						<FormControl
							type='text'
							placeholder='Вторник, 12 ноября'
						/>
					</FormGroup>
				</div>

				<div className='form__section form__section_center'>

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
					>
						<ControlLabel>Пожелания к заказу</ControlLabel>
						<FormControl
							className='form__info'
							componentClass='textarea'
							placeholder='За час до прибытия курьера позвоните. Будьте аккуратнее, хрупкий товар'
						/>
					</FormGroup>
					<div className='form__button-wrap'>
						<Button>Отправить заявку</Button>
					</div>
				</div>
			</form>
		);
	}
}

export default Form;
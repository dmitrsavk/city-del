import React, { Component } from 'react';

import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	Form,
	Modal,
	Panel
} from 'react-bootstrap';

import './Form.css';

import Address from '../Address';

const ROOT_CSS_CLASS = 'form';

class OrderForm extends Component {
	render() {
		const {handleSubmit, addresses, handleAddingAddress, handleChangingAddress, handleDeletingAddress} = this.props;

		const deleteButton = addresses.length > 2 ?
			<Button onClick={handleDeletingAddress}>Удалить адрес</Button> : null;

		const addButton = addresses.length < 4 ?
			<Button onClick={handleAddingAddress}>Добавить адрес</Button> : null;

		return (
			<Form className={`${ROOT_CSS_CLASS}`} onSubmit={handleSubmit}>
				{addresses.map((address, index) =>
					<Address
						key={index}
						index={index}
						{...this.props}
					/>
				)}

				<div className={`${ROOT_CSS_CLASS}__button-add-wrap`}>
					{addButton}
					{deleteButton}
				</div>

				<div className='form__section form__section_center'>
					<div className='form__label'>Информация о заказе</div>

					<FormGroup
						controlId='email'
						className='form__email'
					>
						<ControlLabel>Ваш email</ControlLabel>
						<FormControl
							type='email'
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
						<Button type='submit'>Отправить заявку</Button>
					</div>
				</div>

				<div className={`${ROOT_CSS_CLASS}__button-wrap`}>
					<Button type='submit'>Отправить заявку</Button>
				</div>
			</Form>
		);
	}
}

export default OrderForm;

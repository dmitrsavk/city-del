import React, { Component } from 'react';

import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	Form
} from 'react-bootstrap';

import '../Form/Form.css';

class BuisenessForm extends Component {
	render() {
		const {handleSubmit, handleChangingEmail, handleChangingInformation,
			email, information} = this.props;

		return (
			<Form className='form' onSubmit={handleSubmit}>
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
							value={email}
							onChange={handleChangingEmail}
						/>
					</FormGroup>

					<FormGroup
						controlId='info'
					>
						<ControlLabel>Информация</ControlLabel>
						<FormControl
							className='form__info'
							componentClass='textarea'
							placeholder=''
							value={information}
							onChange={handleChangingInformation}
						/>
					</FormGroup>

					<div className='form__button-wrap'>
						<Button type='submit'>Отправить заявку</Button>
					</div>
				</div>
			</Form>
		);
	}
}

export default BuisenessForm;

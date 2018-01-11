import React, { Component } from 'react';

import {
	Tabs,
	Tab,
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	Form as BootstrapForm
} from 'react-bootstrap';

import './SectionOrder.css';
import Form from '../Form';

class SectionOrder extends Component {
	getBusinessForm() {
		return (
			<BootstrapForm className='form' onSubmit={this.handleSubmit.bind(this)}>
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

					<div className='form__button-wrap'>
						<Button type='submit'>Отправить заявку</Button>
					</div>
				</div>
			</BootstrapForm>
		);
	}

	handleSubmit() {}

	render() {
		return (
			<div className='section-order'>
				<div className='section-order__content'>
					<h1 className='section-order__form-header'>
						Офомление заказа
					</h1>
					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
						<Tab eventKey={1} title="Для частных лиц">
							<div className='section-order__form'>
								<Form />
							</div>
						</Tab>
						<Tab eventKey={2} title="Для бизнеса">
							<div className='section-order__form'>
								{this.getBusinessForm()}
							</div>
						</Tab>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default SectionOrder;

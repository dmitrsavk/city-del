import React, { Component } from 'react';

import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	Form
} from 'react-bootstrap';

import moment from 'moment';
import 'moment/locale/ru';
import InputMoment from 'input-moment';
import 'input-moment/dist/input-moment.css'
import './Form.css';

class OrderForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			openFirstDate: false,
			openSecondDate: false,
			firstDate: moment().locale('ru'),
			secondDate: moment().locale('ru')
		}

		this.handleSecondDateChange = this.handleSecondDateChange.bind(this);
		this.handleFirstDateChange = this.handleFirstDateChange.bind(this);
		this.handleSecondDateSave = this.handleSecondDateSave.bind(this);
		this.handleFirstDateSave = this.handleFirstDateSave.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSecondDateChange(moment) {
		this.setState({secondDate: moment});
	}

	handleFirstDateChange(moment) {
		this.setState({firstDate: moment});
	}

	handleSecondDateSave(moment) {
		this.setState({openSecondDate: !this.state.openSecondDate});
	}

	handleFirstDateSave(moment) {
		this.setState({openFirstDate: !this.state.openFirstDate});
	}

	handleSubmit(event) {
        event.preventDefault();
        console.log('submit')
    }

	render() {
		return (
			<Form className='form' onSubmit={this.handleSubmit}>
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
						className='form__date'
					>
						<ControlLabel>Дата</ControlLabel>
						<FormControl
							type='text'
							placeholder='Вторник, 12 ноября'
							onClick={() => this.setState({
								openFirstDate: !this.state.openFirstDate,
								openSecondDate: false
							})}
							value={this.state.firstDate.format('lll')}
							onChange={() => {}}
						/>
						<div className='form__date-wrap'>
							{this.state.openFirstDate ?
								<InputMoment
									moment={this.state.firstDate}
									onChange={this.handleFirstDateChange}
									minStep={10}
		            				onSave={this.handleFirstDateSave}
								/> :
								null
							}
						</div>
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
						className='form__date'
					>
						<ControlLabel>Дата</ControlLabel>
						<FormControl
							type='text'
							placeholder='Вторник, 12 ноября'
							onClick={() => this.setState({
								openSecondDate: !this.state.openSecondDate,
								openFirstDate: false
							})}
							value={this.state.secondDate.format('lll')}
							onChange={() => {}}
						/>
						<div className='form__date-wrap'>
							{this.state.openSecondDate ?
								<InputMoment
									moment={this.state.secondDate}
									onChange={this.handleSecondDateChange}
									minStep={10}
		            				onSave={this.handleSecondDateSave}
								/> :
								null
							}
						</div>
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
			</Form>
		);
	}
}

export default OrderForm;
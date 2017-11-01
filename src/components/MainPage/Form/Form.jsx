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
			showModal: false,
			showSuccessModal: false,
			openFirstDate: false,
			openSecondDate: false,
			firstDate: moment().locale('ru'),
			secondDate: moment().locale('ru'),
			from: {
				address: null,
				phone: null
			},
			to: {
				address: null,
				phone: null
			},
			email: null,
			fromPhoneValue: '',
			toPhoneValue: '',
			dateValid: null
		}

		this.handleSecondDateChange = this.handleSecondDateChange.bind(this);
		this.handleFirstDateChange = this.handleFirstDateChange.bind(this);
		this.handleSecondDateSave = this.handleSecondDateSave.bind(this);
		this.handleFirstDateSave = this.handleFirstDateSave.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.showModal = this.showModal.bind(this);
		this.send = this.send.bind(this);
		this.hideSuccessModal = this.hideSuccessModal.bind(this);
		this.showSuccessModal = this.showSuccessModal.bind(this);
		this.handleFromPhone = this.handleFromPhone.bind(this);
		this.handleToPhone = this.handleToPhone.bind(this);
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

        if (this.validate()) {
        	this.showModal();
        }
    }

    send() {
    	this.setState({loading: true });

    	const data = {
    		from: {
    			address: this.from ? this.from.value : '',
    			phone: this.fromPhone ? this.fromPhone.value : '',
    			date: this.state.firstDate.format('LLLL')
    		},
    		to: {
    			address: this.to ? this.to.value : '',
    			phone: this.toPhone ? this.toPhone.value : '',
    			date: this.state.secondDate.format('LLLL')
    		},
    		email: this.email ? this.email.value : '',
    		info: this.info ? this.info.value : ''
    	};

	    fetch('http://citydeliver.ru:3001', {
	    	method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
	    })
	    .then(res => res.json())
	    .then(json => {
	    	this.setState({loading: false});
	      	this.hideModal();
	      	this.showSuccessModal();
	    })

    }

    validate() {
    	const fromAddressIsValid = this.from.value.length !== 0;
    	const toAddressIsValid = this.to.value.length !== 0;
    	const fromPhoneIsValid = this.isPhoneValid(this.fromPhone.value);
    	const toPhoneIsValid = this.isPhoneValid(this.toPhone.value);
    	const dateIsValid = this.isDateValid();

    	this.setState({
    		from: {
    			address: fromAddressIsValid ? null : 'error',
    			phone: fromPhoneIsValid ? null : 'error'
    		},
    		to: {
    			address: toAddressIsValid ? null : 'error',
    			phone: toPhoneIsValid ? null : 'error'
    		},
    		dateValid: dateIsValid ? null : 'error'
    	});

    	return fromAddressIsValid &&
			toAddressIsValid &&
			fromPhoneIsValid &&
			toPhoneIsValid &&
			dateIsValid;
	}

	showModal() {
		this.setState({showModal: true});
	}

	hideModal() {
		this.setState({showModal: false})
	}

	showSuccessModal() {
		this.setState({showSuccessModal: true})
	}

	hideSuccessModal() {
		this.setState({showSuccessModal: false})
	}

	isPhoneValid(value) {
		const digitRegex = /^\d+$/;
        return digitRegex.test(value);
	}

	handleFromPhone(event) {
		const digitRegex = /^\d+$/;

        if (digitRegex.test(event.target.value) || event.target.value === '') {
        	this.setState({
        		fromPhoneValue: event.target.value
        	});
        };
	}

	handleToPhone(event) {
		const digitRegex = /^\d+$/;

        if (digitRegex.test(event.target.value) || event.target.value === '') {
        	this.setState({
        		toPhoneValue: event.target.value
        	});
        };
	}

	isDateValid() {
		const now = moment().locale('ru');
		return this.state.firstDate > now &&
			this.state.secondDate > now &&
			this.state.secondDate > this.state.firstDate;
	}

	render() {
		return (
			<Form className='form' onSubmit={this.handleSubmit}>
				<Modal show={this.state.showSuccessModal} onHide={this.hideSuccessModal}>
					<Modal.Header closeButton>
						<Modal.Title>Ваша заявка принята</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						На email <b>{this.email ? this.email.value : ''}</b> выслано письмо с дальнейшими инструкциями. 
					</Modal.Body>
				</Modal>
				<Modal show={this.state.showModal} onHide={this.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>Подтвердите заявку</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Panel header='Откуда' bsStyle='primary'>
							<Panel header='Адрес'>
								{this.from ? this.from.value : ''}
						    </Panel>
						    <Panel header='Номер телефона'>
						    	{this.fromPhone ? this.fromPhone.value : ''}
						    </Panel>
						    <Panel header='Дата'>
						    	{this.state.firstDate.format('LLLL')}
						    </Panel>
					    </Panel>
					    <Panel header='Куда' bsStyle='primary'>
					    	<Panel header='Адрес'>
					    		{this.to ? this.to.value : ''}
						    </Panel>
						    <Panel header='Номер телефона'>
						    	{this.toPhone ? this.toPhone.value : ''}
						    </Panel>
						    <Panel header='Дата'>
						    	{this.state.secondDate.format('LLLL')}
						    </Panel>
					    </Panel>
					    <Panel header='Информация о заказе' bsStyle='primary'>
					    	<Panel header='Email'>
					    		{this.email ? this.email.value : ''}
						    </Panel>
						    <Panel header='Пожелания к заказу'>
						    	{this.info ? this.info.value : ''}
						    </Panel>
					    </Panel>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.hideModal}>Отменить</Button>
						<Button
							onClick={!this.state.loading ? this.send : null}
							disabled={this.state.loading}
						>
							Отправить заявку
						</Button>
					</Modal.Footer>
				</Modal>
				<div className='form__section'>
					<div className='form__label'>Откуда</div>

					<FormGroup
						controlId='address'
						className='form__address'
						validationState={this.state.from.address}
					>
						<ControlLabel>Адрес</ControlLabel>
						<FormControl
							type='text'
							placeholder='Несвижский переулок, 2'
							inputRef={ref => { this.from = ref; }}
						/>
					</FormGroup>
					<FormGroup
						controlId='phone'
						className='form__phone'
						validationState={this.state.from.phone}
					>
						<ControlLabel>Телефон</ControlLabel>
						<FormControl
							type='text'
							placeholder='89657820725'
							inputRef={ref => { this.fromPhone = ref; }}
							value={this.state.fromPhoneValue}
							onChange={this.handleFromPhone}
						/>
					</FormGroup>
					<FormGroup
						controlId='time'
						className='form__date'
						validationState={this.state.dateValid}
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
						validationState={this.state.to.address}
					>
						<ControlLabel>Адрес</ControlLabel>
						<FormControl
							type='text'
							placeholder='Несвижский переулок, 4'
							inputRef={ref => { this.to = ref; }}
						/>
					</FormGroup>
					<FormGroup
						controlId='phone'
						className='form__phone'
						validationState={this.state.to.phone}
					>
						<ControlLabel>Телефон</ControlLabel>
						<FormControl
							type='text'
							placeholder='89661445646'
							inputRef={ref => { this.toPhone = ref; }}
							value={this.state.toPhoneValue}
							onChange={this.handleToPhone}
						/>
					</FormGroup>
					<FormGroup
						controlId='time'
						className='form__date'
						validationState={this.state.dateValid}
					>
						<ControlLabel>Дата</ControlLabel>
						<FormControl
							type='text'
							placeholder='Среда, 13 ноября'
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
							inputRef={ref => { this.email = ref; }}
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
							inputRef={ref => { this.info = ref; }}
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
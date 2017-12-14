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

import DatePicker from 'react-date-picker';

import './Form.css';

class OrderForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			showModal: false,
			showSuccessModal: false,
			firstDate: new Date(),
			secondDate: new Date(),
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
			dateValid: null,
			emailValid: null,
			orderNumber: null
		}

		this.handleSecondDateChange = this.handleSecondDateChange.bind(this);
		this.handleFirstDateChange = this.handleFirstDateChange.bind(this);
;
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

	handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
        	this.showModal();
        }
    }

    send() {
    	this.setState({loading: true });

    	const maximum = 999999;
	    const minimum = 100000;

	    let orderNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	    orderNumber = orderNumber.toString();
	    orderNumber = orderNumber.slice(0, 3) + ' ' + orderNumber.slice(3);

	    this.setState({orderNumber});

    	const data = {
    		orderNumber: orderNumber,
    		from: {
    			address: this.from ? this.from.value : '',
    			phone: this.fromPhone ? this.fromPhone.value : '',
    			date: this.state.firstDate.toLocaleDateString()
    		},
    		to: {
    			address: this.to ? this.to.value : '',
    			phone: this.toPhone ? this.toPhone.value : '',
    			date: this.state.secondDate.toLocaleDateString()
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
    	const emailIsValid = this.email.value.length !== 0;

    	this.setState({
    		from: {
    			address: fromAddressIsValid ? null : 'error',
    			phone: fromPhoneIsValid ? null : 'error'
    		},
    		to: {
    			address: toAddressIsValid ? null : 'error',
    			phone: toPhoneIsValid ? null : 'error'
    		},
    		dateValid: dateIsValid ? null : 'error',
    		emailValid: emailIsValid ? null : 'error'
    	});

    	return fromAddressIsValid &&
			toAddressIsValid &&
			fromPhoneIsValid &&
			toPhoneIsValid &&
			dateIsValid &&
			emailIsValid;
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
		const now = new Date();

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
						Спасибо за заявку!<br/>
						Номер заказа - <b>{this.state.orderNumber}</b><br/>
						В течении 5 минут, с вами свяжется диспетчер 
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
						    	{this.state.firstDate && this.state.firstDate.toLocaleDateString()}
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
						    	{this.state.secondDate && this.state.secondDate.toLocaleDateString()}
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
							Отправить
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
							type='tel'
							placeholder='89657820725'
							inputRef={ref => { this.fromPhone = ref; }}
							value={this.state.fromPhoneValue}
							onChange={this.handleFromPhone}
						/>
					</FormGroup>
					<div className='form__date'>
						<div className='form__date-day'>
							<div className='form__date-label'>
								День
							</div>
							<DatePicker
								onChange={this.handleFirstDateChange}
								value={this.state.firstDate}
					        />
					    </div>
					    <div className='form__date-time'>
					        <ControlLabel>Время</ControlLabel>
							<FormControl
								placeholder='14:00'
								inputRef={ref => { this.fromTime = ref; }}
							/>
						</div>
				    </div>
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
							type='tel'
							placeholder='89661445646'
							inputRef={ref => { this.toPhone = ref; }}
							value={this.state.toPhoneValue}
							onChange={this.handleToPhone}
						/>
					</FormGroup>
					<div className='form__date'>
						<div className='form__date-day'>
							<div className='form__date-label'>
								День
							</div>
							<DatePicker
								onChange={this.handleSecondDateChange}
								value={this.state.secondDate}
					        />
					    </div>
					    <div className='form__date-time'>
					        <ControlLabel>Время</ControlLabel>
							<FormControl
								placeholder='14:00'
								inputRef={ref => { this.toTime = ref; }}
							/>
						</div>
				    </div>
				</div>

				<div className='form__section form__section_center'>

					<div className='form__label'>Информация о заказе</div>

					<FormGroup
						controlId='time'
						className='form__email'
						validationState={this.state.emailValid}
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
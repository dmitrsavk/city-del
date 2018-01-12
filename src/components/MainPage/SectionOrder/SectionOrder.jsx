import React, { Component } from 'react';

import {
	Tabs,
	Tab
} from 'react-bootstrap';

import './SectionOrder.css';
import Form from '../Form';
import BuisenessForm from '../BuisenessForm';

class SectionOrder extends Component {
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
								<BuisenessForm />
							</div>
						</Tab>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default SectionOrder;

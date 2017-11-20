import React, { Component } from 'react';

import './SectionOrder.css';
import Form from '../Form';

class SectionOrder extends Component {
	render() {
		return (
			<div className='section-order'>
				<div className='section-order__content'>
					<h1 className='section-order__form-header'>
						Офомление заказа
					</h1>
					<div className='section-order__form'>
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default SectionOrder;

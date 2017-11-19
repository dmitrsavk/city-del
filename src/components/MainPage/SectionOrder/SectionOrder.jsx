import React, { Component } from 'react';

import './SectionOrder.css';
import Form from '../Form';

class SectionOrder extends Component {
	render() {
		return (
			<div className='section-order'>
				<div className='section-order__content'>
					<div className='section-order__form-header'>
						Офомление заказа
					</div>
					<div className='section-order__form'>
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default SectionOrder;

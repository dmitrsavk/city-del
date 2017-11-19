import React, { Component } from 'react';

import './InstructionSection.css';

class InstructionSection extends Component {
	render() {
		return (
			<div className='instruction-section'>
				<div className='instruction-section__header'>
					Оформить доставку очень просто
				</div>
				<div className='instruction-section__description'>
					<div className='instruction-section__description-item'>
						<div className='instruction-section__description-item-header'>
							<div className='instruction-section__description-item-header-logo'>
								1
							</div>
							<div className='instruction-section__description-item-header-text'>
								Заполните форму на сайте
							</div>
						</div>
						<div className='instruction-section__description-item-text'>
							Просто напишите адрес отправления и адрес получения и программа рассчитает стоимость
							автоматически. Укажите вид товара, сроки и пожелания к заказу.
						</div>
					</div>
					<div className='instruction-section__description-item'>
						<div className='instruction-section__description-item-header'>
							<div className='instruction-section__description-item-header-logo'>
								2
							</div>
							<div className='instruction-section__description-item-header-text'>
								Вам перезвонит диспетчер
							</div>
						</div>
						<div className='instruction-section__description-item-text'>
							Вам перезвонит диспетчер для уточнения информации о заказе.
						</div>
					</div>
					<div className='instruction-section__description-item'>
						<div className='instruction-section__description-item-header'>
							<div className='instruction-section__description-item-header-logo'>
								3
							</div>
							<div className='instruction-section__description-item-header-text'>
								Выезд курьера
							</div>
						</div>
						<div className='instruction-section__description-item-text'>
							Перед тем как выехать, курьер обязательно с вами свяжется. Так же он сообщит
							вам об окончании выполнения заказа.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InstructionSection;
 

import React, { Component } from 'react';

import {Modal} from 'react-bootstrap';

class ModalSuccess extends Component {
    render() {
        const {showSuccessModal, hideSuccessModal, orderNumber} = this.props;

        return (
            <Modal show={showSuccessModal} onHide={hideSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ваша заявка принята</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Спасибо за заявку!<br/>
                    Номер заказа - <b>{orderNumber}</b><br/>
                    В течении 5 минут, с вами свяжется диспетчер
                </Modal.Body>
            </Modal>
        )
    }
}

export default ModalSuccess;

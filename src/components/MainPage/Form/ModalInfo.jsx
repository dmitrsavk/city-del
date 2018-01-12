import React, { Component } from 'react';

import {Modal, Panel, Button} from 'react-bootstrap';

class ModalInfo extends Component {

    getAddress(address, index) {
        return (
            <Panel header={`Адрес №${index + 1}`} bsStyle='primary' key={index}>
                <Panel header='Адрес'>
                    {address.address}
                </Panel>
                <Panel header='Номер телефона'>
                    {address.phone}
                </Panel>
                <Panel header='Дата'>
                    {this.getDate(address.day, address.time)}
                </Panel>
            </Panel>
        );
    }

    getDate(day, time) {
        return `${day.toLocaleDateString()} - ${time}`;
    }

    render() {
        const {showInfoModal, hideInfoModal, loading, send,
                addresses, email, information} = this.props;

        return (
            <Modal show={showInfoModal} onHide={hideInfoModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Подтвердите заявку</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {addresses.map((address, index) => this.getAddress(address, index))}

                    <Panel header='Информация о заказе' bsStyle='primary'>
                        <Panel header='Email'>
                            {email}
                        </Panel>
                        <Panel header='Пожелания к заказу'>
                            {information}
                        </Panel>
                    </Panel>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideInfoModal}>Отменить</Button>
                    <Button
                        onClick={!loading ? send : null}
                        disabled={loading}
                    >
                        Отправить
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalInfo;

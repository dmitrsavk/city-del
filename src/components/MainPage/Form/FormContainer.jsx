import React, { Component } from 'react';

import Form from './Form';
import ModalInfo from '../Modal/ModalInfo';
import ModalSuccess from '../Modal/ModalSuccess';


class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            showInfoModal: false,
            showSuccessModal: false,
            addresses: this.getAddresses(),
            email: '',
            information: '',
            orderNumber: null
        };

        this.bindHandlers();
    }


    getAddresses() {
        return [this.getEmptyAddress(), this.getEmptyAddress()];
    }


    getEmptyAddress() {
        return {
            address: '',
            phone: '',
            day: new Date(),
            time: ''
        };
    }


    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            this.showInfoModal();
        }
    }


    handleAddingAddress() {
        this.setState({
            addresses: [...this.state.addresses, this.getEmptyAddress()]
        });
    }


    handleChangingAddress(index, type, event) {
        const copiedAddresses = this.state.addresses.slice();

        if (copiedAddresses[index]) {
            copiedAddresses[index][type] = event.target ? event.target.value : event;

            this.setState({addresses: copiedAddresses});
        }
    }

    handleDeletingAddress() {
        const addresses = this.state.addresses.slice(0, this.state.addresses.length - 1);

        this.setState({addresses});
    }


    handleChangingEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangingInformation(event) {
        this.setState({information: event.target.value});
    }


    bindHandlers() {
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddingAddress = this.handleAddingAddress.bind(this);

        this.handleChangingAddress = this.handleChangingAddress.bind(this);
        this.handleDeletingAddress = this.handleDeletingAddress.bind(this);

        this.handleChangingEmail = this.handleChangingEmail.bind(this);
        this.handleChangingInformation = this.handleChangingInformation.bind(this);
    }

    showSuccessModal() {
        this.setState({showSuccessModal: true})
    }

    hideSuccessModal() {
        this.setState({showSuccessModal: false})
    }

    showInfoModal() {
        this.setState({showInfoModal: true})
    }

    hideInfoModal() {
        this.setState({showInfoModal: false})
    }

    send() {
        this.setState({loading: true});

        const data = this.getRequestData();

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
            this.hideInfoModal();
            this.showSuccessModal();
        })
    }

    validate() {
        return true;
    }


    getRequestData() {
        return {
            type: 'private',
            orderNumber: this.getRandomOrderNumber(),
            addresses: this.getFormattedAddresses(),
            email: this.state.email,
            information: this.state.information
        }
    }


    getRandomOrderNumber() {
        const maximum = 999999;
        const minimum = 100000;

        let orderNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

        orderNumber = orderNumber.toString();
        orderNumber = orderNumber.slice(0, 3) + ' ' + orderNumber.slice(3);

        return orderNumber;
    }


    getFormattedAddresses() {
        return this.state.addresses.map(address => ({
            address: address.address,
            phone: address.phone,
            date: this.getDate(address.day, address.time)
        }));
    }


    getDate(day, time) {
        return `${day.toLocaleDateString()} - ${time}`;
    }


    render() {
        return (
            <div>
                <Form
                    {...this.state}
                    handleSubmit={this.handleSubmit}
                    handleAddingAddress={this.handleAddingAddress}
                    handleChangingAddress={this.handleChangingAddress}
                    handleDeletingAddress={this.handleDeletingAddress}
                    handleChangingEmail={this.handleChangingEmail}
                    handleChangingInformation={this.handleChangingInformation}
                />
                <ModalInfo
                    {...this.state}
                    hideInfoModal={this.hideInfoModal.bind(this)}
                    send={this.send.bind(this)}
                />
                <ModalSuccess
                    {...this.state}
                    hideSuccessModal={this.hideSuccessModal.bind(this)}
                />
            </div>
        );
    }
}

export default FormContainer;

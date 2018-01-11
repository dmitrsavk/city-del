import React, { Component } from 'react';

import Form from './Form';


class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            showModal: false,
            showSuccessModal: false,
            addresses: this.getAddresses(),
            email: '',
            information: ''
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


    bindHandlers() {
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddingAddress = this.handleAddingAddress.bind(this);

        this.handleChangingAddress = this.handleChangingAddress.bind(this);
        this.handleDeletingAddress = this.handleDeletingAddress.bind(this);
    }


    render() {
        return (
            <Form
                {...this.state}
                handleSubmit={this.handleSubmit}
                handleAddingAddress={this.handleAddingAddress}
                handleChangingAddress={this.handleChangingAddress}
                handleDeletingAddress={this.handleDeletingAddress}
            />
        );
    }
}

export default FormContainer;

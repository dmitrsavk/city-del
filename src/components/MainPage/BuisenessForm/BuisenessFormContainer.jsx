import React, { Component } from 'react';

import BuisenessForm from './BuisenessForm';

import ModalInfo from '../Modal/ModalInfo';
import ModalSuccess from '../Modal/ModalSuccess';


class BuisenessFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            showInfoModal: false,
            showSuccessModal: false,
            email: '',
            information: ''
        };

        this.bindHandlers();
    }

    bindHandlers() {
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangingEmail = this.handleChangingEmail.bind(this);
        this.handleChangingInformation = this.handleChangingInformation.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            this.showInfoModal();
        }
    }

    handleChangingEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleChangingInformation(event) {
        this.setState({
            information: event.target.value
        });
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
            type: 'public',
            email: this.state.email,
            information: this.state.information
        }
    }

    render() {
        return (
            <div>
                <BuisenessForm
                    {...this.state}
                    handleSubmit={this.handleSubmit}
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

export default BuisenessFormContainer;

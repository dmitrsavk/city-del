import React, { Component } from 'react';

import {
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

import DatePicker from 'react-date-picker';

import './Address.css';

class Address extends Component {
    render() {
        const {index, addresses, handleChangingAddress} = this.props;

        const {address, phone, day, time, note} = addresses[index];

        return (
            <div className='form__section'>
                <div className='form__label'>Адрес №{index + 1}</div>

                <FormGroup
                    controlId='address'
                    className='form__address'
                >
                    <ControlLabel>Адрес</ControlLabel>
                    <FormControl
                        type='text'
                        placeholder='Несвижский переулок, 2'
                        value={address}
                        onChange={handleChangingAddress.bind(null, index, 'address')}
                    />
                </FormGroup>

                <FormGroup
                    controlId='phone'
                    className='form__phone'
                >
                    <ControlLabel>Телефон</ControlLabel>
                    <FormControl
                        type='tel'
                        placeholder='89657820725'
                        value={phone}
                        onChange={handleChangingAddress.bind(null, index, 'phone')}
                    />
                </FormGroup>

                <div className='form__date form-group'>
                    <div className='form__date-day'>
                        <div className='form__date-label'>
                            День
                        </div>
                        <DatePicker
                            value={day}
                            onChange={handleChangingAddress.bind(null, index, 'day')}
                        />
                    </div>
                    <div className='form__date-time'>
                        <ControlLabel>Время</ControlLabel>
                        <FormControl
                            placeholder='14:00'
                            value={time}
                            onChange={handleChangingAddress.bind(null, index, 'time')}
                        />
                    </div>
                </div>

                <FormGroup
                    controlId='note'
                    className='form__note'
                >
                    <ControlLabel>Примечание</ControlLabel>
                    <FormControl
                        type='text'
                        placeholder='Отсюда нужно будет забрать пиццу'
                        value={note}
                        onChange={handleChangingAddress.bind(null, index, 'note')}
                    />
                </FormGroup>
            </div>
        );
    }
}

export default Address;

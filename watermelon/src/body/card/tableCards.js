import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Const from '../../const.js';
import User from '../../objects/user.js';
import LineCard from './lineCard';


const cste = new Const();

class tableCards extends Component {
    constructor(props) {
        super(props);
        var pState = JSON.parse(localStorage.getItem(cste.keyPrevState));

        var u = new User();
        u.findUserById(pState.userId);

        this.state = {
            user: {
                id: u.id,
                first_name: u.first_name,
                last_name: u.last_name,
                email: u.email,
                password: u.password,
            },
            readOnly: true,
        };
    }

    displayAllCards = () => {
        return (
            <tbody>
                <LineCard />

            </tbody>

        );
    }


    render() {
        return (
            <Table striped bordered hover variant="dark ">
                <thead>
                    <th>N° de carte (4 derniers chiffres)</th>
                    <th>Type</th>
                    <th>Expiration</th>
                    <th></th>
                </thead>

                {this.displayAllCards()}

            </Table >
        );
    }
}
export default tableCards;
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Const from '../../const.js';
import User from '../../objects/user.js';

const cste = new Const();

class lineCard extends Component {
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


    render() {
        return (
            <tr> 
                <td align="center">last_4</td>
                <td align="center">type</td>
                <td align="center">exp_date</td>
                <td align="center">
                    <Button variant="secondary">Modifier</Button>
                    <Button variant="danger">Supprimer</Button>
                </td>
            </tr>
        );
    }
}
export default lineCard;
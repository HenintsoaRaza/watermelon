import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Const from '../../const.js';
import User from '../../objects/user.js';
import LineCard from './lineCard';
import Card from '../../objects/card.js';

const cste = new Const();

class tableCards extends Component {
    constructor(props) {
        super(props);

        var pState = JSON.parse(localStorage.getItem(cste.keyPrevState));
        var u = new User();
        u.findUserById(pState.userId);

        this.state = {
            userId: u.id,
        };
    }

    displayAllCards = () => {
        var util = new Card();
        var id = this.state.userId;
        var listCard = util.getCardByUserId(id);

        let listItem = listCard.map((c, index) =>
            <LineCard card={c} i={index} refresh={this.refresh} />
        );

        return (<tbody>{listItem}</tbody>);
    }

    refresh = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <Table striped bordered hover variant="dark">
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
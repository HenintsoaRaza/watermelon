import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import { Collapse } from 'react-collapse';

import Const from '../const.js';
import User from '../objects/user.js';
import TableCards from './myCards/tableCards';
import Card from '../objects/card.js';


const cste = new Const();

class myCards extends Component {
    constructor(props) {
        super(props);

        var pState = JSON.parse(localStorage.getItem(cste.keyPrevState));
        var u = new User();
        u.findUserById(pState.userId);

        this.currentDate = this.currentDate();

        this.state = {
            collapse: false,
            userId: u.id,

            id: 0,
            last_4: '',
            brand: 'Visa',
            expired_at: '',
        };
    }

    toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    currentDate = () => {
        var date = new Date();
        var month = (date.getMonth() + 1).toString();
        var year = (date.getFullYear()).toString();
        var minDate = year + '-' + month;
        return minDate;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });

    }

    handleSubmit = (event) => {
        var number = this.state.last_4;
        var c1 = new Card();
        var cId = c1.getNewId();

        if (number.length == 4 && (/^\d+$/.test(number))) {
            var c = new Card();
            this.setState({ id: cId }, () => {
                c.copy(this.state);
                c.saveCard();
            });
        } else {
            alert("Le numéro de la carte saisi n'est pas valide (4 chiffres)");
            event.preventDefault();
            event.stopPropagation();
        }
    }

    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <div class="bg-light rounded border container-fluid col-lg-8 col-md-11 col-sm-10" >
                    <br /><br />
                    <h1 align="center"><a class="text-dark"> Mes Cartes Bancaires </a></h1>
                    <br /><br />
                    <TableCards />

                </div>
                <br />

                <div class="bg-light rounded border container-fluid col-lg-6 col-md-10 col-sm-8" >
                    <br />
                    <h2 align="center"><a class="text-dark"> Ajouter une carte </a></h2>
                    <br />

                    <div align="center" >
                        <Button variant="success" onClick={() => { this.toggleCollapse() }}>
                            \/
                        </Button>
                    </div>

                    <br />

                    <Collapse isOpened={this.state.collapse}>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <label for="last_4">N° (4 derniers chiffres)</label>
                                        <Form.Control
                                            required onChange={this.handleInputChange}
                                            name="last_4" type="text"
                                            placeholder="0000" />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <label for="brand">Type</label>
                                        <Form.Control as="select" name="brand" onChange={this.handleInputChange}>
                                            <option>Visa</option>
                                            <option>Master Card</option>
                                            <option>American Express</option>
                                            <option>Union Pay</option>
                                            <option>JCB</option>
                                        </Form.Control>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <label for="expired_at">Expiration</label>
                                        <Form.Control
                                            required type="month" name="expired_at"
                                            onChange={this.handleInputChange}
                                            min={this.currentDate} />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <br /><br />
                            <div align="center" >
                                <Button type="submit" variant="primary">
                                    Enregistrer
                                </Button>
                            </div>
                            <br /><br />

                        </Form>
                    </Collapse>

                </div>
            </div>
        );
    }
}
export default myCards;
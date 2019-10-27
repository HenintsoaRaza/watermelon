import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Const from '../../const.js';
import Card from '../../objects/card.js';
import { Collapse } from 'react-collapse';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class myTransfers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            amount: null,
            emailTarget: null,
            tab: [],
        }
    }

    toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    tabTransfers = () => {

        return null;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });

    }

    save = () => {
        // sauver dans Localstorage et ajouter au tab[]

    }

    render() {
        return (

            <div class="bg-light rounded border container-fluid col-lg-8 col-md-11 col-sm-10" >
                <br /><br />
                <h1 align="center"><a class="text-warning"> Mes Transferts </a></h1>
                <br /><br />

                {this.tabTransfers}

                <div align="center" >
                    <Button variant="warning" onClick={this.toggleCollapse}>
                        Effectuer un transfert
                    </Button>
                </div>
                <br /><br />

                <Collapse isOpened={this.state.collapse}>
                    <hr />
                    <Row>
                        <Col md={4}>
                            <Form.Control
                                required onChange={this.handleInputChange}
                                name="emailTarget" type="email"
                                placeholder="Email du destinataire " 
                                value={this.state.emailTarget}
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                required onChange={this.handleInputChange}
                                name="amount" type="number" min="0" step="0.01"
                                placeholder="Montant  € " value={this.state.amount}
                            />
                        </Col>
                        <Col md={4}>
                            <Button variant="primary" onClick={this.save} >
                                Enregistrer
                            </Button>
                        </Col>
                    </Row>
                    <br /><br />
                </Collapse>

            </div>


        );
    }

}
export default myTransfers;
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Transfer from '../../objects/transfer';
import { Collapse } from 'react-collapse';
import User from '../../objects/user';


class myTransfers extends Component {
    constructor(props) {
        super(props);
        var t = new Transfer();
        var userId = this.props.userId;
        this.state = {
            dest: '',
            collapse: false,
            debited_wallet_id: userId,
            credited_wallet_id: null,
            amount: null,
            tab: t.getTransfersByWallet_id(userId),
        }
    }

    toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    tabTransfers = () => {
        let listItem = this.state.tab.map((transfer) =>
            <tr>
                <td align="center"> {transfer.id} </td>
                <td align="center"> {transfer.debited_wallet_id} </td>
                <td align="center"> {transfer.credited_wallet_id} </td>
                <td align="center"> {(transfer.amount)}</td>
            </tr>
        );
        return (<tbody>{listItem}</tbody>);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });

    }

    save = (event) => {
        this.toggleCollapse();
        var t = new Transfer();
        var u = new User();
        u.findUserById(this.props.userId);
        var email = u.email;

        // sauver dans Localstorage et ajouter au tab[]
        if (u.existEmail(email) == true) {
            this.setState(state => {
                var newId = t.getNewId();
                t.id = newId;
                t.copy(state);
                t.save();

                const list = state.tab.concat({ t });
                return { tab: list };
            });
        } else {
            alert("L'email saisi est inconnue");
            event.preventDefault();
            event.stopPropagation();
        }
    }

    render() {
        return (

            <div class="bg-light rounded border container-fluid col-lg-8 col-md-11 col-sm-10" >
                <br />
                <h1 align="center"><a class="text-warning"> Mes Transferts </a></h1>
                <br />

                <Table striped bordered hover variant="warning">
                    <thead>
                        <th>#</th>
                        <th>De la part de...</th>
                        <th>à destination de...</th>
                        <th>Montant (€)</th>
                    </thead>

                    {this.tabTransfers()}
                </Table>

                <br/><br/>

                <div align="center" >
                    <Button variant="warning" onClick={this.toggleCollapse}>
                        Effectuer un transfert
                    </Button>
                </div>
                <br /><br />

                <Collapse isOpened={this.state.collapse}>
                    <hr />
                    <Form onSubmit={this.save} >
                        <Row>
                            <Col md={4}>
                                <Form.Control
                                    required onChange={this.handleInputChange}
                                    name="credited_wallet_id" type="email"
                                    placeholder="à destination de... " value={this.state.credited_wallet_id}
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
                                <Button variant="primary" type="submit" >
                                    Enregistrer
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                    <br /><br />
                </Collapse>

            </div>


        );
    }

}
export default myTransfers;
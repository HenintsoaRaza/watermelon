import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Transfer from '../../objects/transfer';
import { Collapse } from 'react-collapse';
import User from '../../objects/user';
import Wallet from '../../objects/wallet';
import Card from '../../objects/card';


class myTransfers extends Component {
    constructor(props) {
        super(props);
        var t = new Transfer();
        var userId = this.props.userId;
        this.state = {
            collapse: false,
            receiverEmail: null,
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
        var w = new Wallet();

        let listItem = this.state.tab.map((transfer) =>
            <tr>
                <td align="center"> {transfer.id} </td>
                <td align="center"> {w.getEmail(transfer.debited_wallet_id)} </td>
                <td align="center"> {w.getEmail(transfer.credited_wallet_id)} </td>
                <td align="center"> {(transfer.amount) / 100}</td>
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

        var util = new Card();
        if (util.haveCard(this.state.debited_wallet_id)) {

            var util = new Wallet();
            if (util.getBalanceById(this.state.debited_wallet_id) - this.state.amount >= 0 || this.state.amount > 0) {
                var t = new Transfer();

                var receiver = new User();
                var email = this.state.receiverEmail;
                var myId = util.getEmail(this.state.debited_wallet_id);

                // sauver dans Localstorage et ajouter au tab[]
                if (receiver.existEmail(email) != null && email != myId) {
                    this.setState(state => {
                        this.toggleCollapse();

                        var newId = t.getNewId();
                        t.id = newId;
                        receiver.findUserByEmail(email);
                        t.copy2(state);
                        t.credited_wallet_id = receiver.id;
                        t.amount = t.amount * 100;
                        t.save();

                        const list = state.tab.concat({ t });
                        return { tab: list };
                    });
                    window.location.reload(false);

                } else if (receiver.existEmail(email) == null) {
                    alert("L'email saisi est inconnue");
                    event.preventDefault();
                    event.stopPropagation();
                } else if (email == myId) {
                    alert("Vous ne pouvez pas vous envoyez de l'argent à vous-même quand même :)");
                    event.preventDefault();
                    event.stopPropagation();
                }

            } else if(util.getBalanceById(this.state.debited_wallet_id) - this.state.amount < 0) {
                event.preventDefault();
                event.stopPropagation();
                alert("Vos fonds sont insuffisants pour effectuer cette transaction :(");
            } else if(this.state.amount <= 0) {
                event.preventDefault();
                event.stopPropagation();
            }

        } else {
            event.preventDefault();
            event.stopPropagation();
            alert("Vous devriez ajouter une carte avant d'effectuer une transaction quelconque");
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
                        <th size="20%">#</th>
                        <th size="30%">De la part de...</th>
                        <th size="30%">à destination de...</th>
                        <th size="20%">Montant (€)</th>
                    </thead>

                    {this.tabTransfers()}
                </Table>

                <br /><br />

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
                                    name="receiverEmail" type="email"
                                    placeholder="à destination de... " value={this.state.receiverEmail}
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
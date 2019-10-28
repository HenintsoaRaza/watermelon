import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Payout from '../../objects/payout.js';
import { Collapse } from 'react-collapse';
import Wallet from '../../objects/wallet.js';
import Card from '../../objects/card.js';


class myPayouts extends Component {
    constructor(props) {
        super(props);
        var po = new Payout();
        var userId = this.props.userId;
        this.state = {
            collapse: false,
            amount: null,
            wallet_id: userId,
            tab: po.getPayoutsByWallet_id(userId),
        }
    }

    toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    tabPayouts = () => {
        let listItem = this.state.tab.map((payout) =>
            <tr>
                <td align="center"> {payout.id} </td>
                <td align="center"> {(payout.amount / 100)}</td>
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
        if (util.haveCard(this.state.wallet_id)) {

            var util = new Wallet();
            alert(util.getBalanceById(this.state.wallet_id) - this.state.amount);
            if (util.getBalanceById(this.state.wallet_id) - this.state.amount >= 0 && this.state.amount > 0) {
                this.toggleCollapse();
                var po = new Payout();

                // sauver dans Localstorage et ajouter au tab[]
                this.setState(state => {
                    var newId = po.getNewId();
                    po.id = newId;
                    po.copy(state);
                    po.amount = po.amount * 100;
                    po.save();

                    const list = state.tab.concat({ po });
                    return { tab: list };
                });

                window.location.reload(false);
            } else if (util.getBalanceById(this.state.wallet_id) - this.state.amount < 0) {
                event.preventDefault();
                event.stopPropagation();
                alert("Vos fonds sont insuffisants pour effectuer cette transaction :(");
            } else if (this.state.amount <= 0) {
                event.preventDefault();
                event.stopPropagation();
            }


        } else {
            event.preventDefault();
            event.stopPropagation();
            alert("Vous devriez ajouter une carte avant d'effectuer une transaction quelconque ;) ");
        }

    }

    render() {
        return (

            <div class="bg-light rounded border container-fluid col-lg-8 col-md-11 col-sm-10" >
                <br />
                <h1 align="center"><a class="text-danger"> Mes Retraits </a></h1>
                <br />

                <Table striped bordered hover variant="danger">
                    <thead>
                        <th width="30%"># référence</th>
                        <th width="70%">Montant (€)</th>
                    </thead>


                    {this.tabPayouts()}
                </Table>

                <br /><br />
                <div align="center" >
                    <Button variant="danger" onClick={this.toggleCollapse}>
                        Effectuer un retrait
                    </Button>
                </div>
                <br /><br />

                <Collapse isOpened={this.state.collapse}>
                    <hr />
                    <Form onSubmit={this.save} >
                        <Row>
                            <Col md={4}></Col>
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
export default myPayouts;
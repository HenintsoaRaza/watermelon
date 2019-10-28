import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Payout from '../../objects/payout.js';
import { Collapse } from 'react-collapse';


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
        let listItem = this.state.tab.map((payout, index) =>
            <tr>
                <td align="center"> {index} </td>
                <td align="center"> {(payout.amount/100)}</td>
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

    save = () => {
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
    }

    render() {
        return (

            <div class="bg-light rounded border container-fluid col-lg-8 col-md-11 col-sm-10" >
                <br />
                <h1 align="center"><a class="text-danger"> Mes Retraits </a></h1>
                <br />

                <Table striped bordered hover variant="danger">
                    <thead>
                        <th width="30%"># transaction</th>
                        <th width="70%">Montant (€)</th>
                    </thead>

                    
                        {this.tabPayouts()}
                </Table>

                <br/><br/>
                <div align="center" >
                    <Button variant="danger" onClick={this.toggleCollapse}>
                        Effectuer un retrait
                    </Button>
                </div>
                <br /><br />

                <Collapse isOpened={this.state.collapse}>
                    <hr />
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
                            <Button variant="primary" onClick={() => { this.save() }} >
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
export default myPayouts;
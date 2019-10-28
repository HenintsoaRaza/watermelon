import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Payin from '../../objects/payin.js';
import { Collapse } from 'react-collapse';


class myPayins extends Component {
    constructor(props) {
        super(props);
        var pi = new Payin();
        var userId = this.props.userId;
        this.state = {
            collapse: false,
            amount: null,
            wallet_id: userId,
            tab: pi.getPayinsByWallet_id(userId),
        }
    }

    toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    tabPayins = () => {
        let listItem = this.state.tab.map((payin) =>
            <tr>
                <td align="center"> {payin.id} </td>
                <td align="center"> {payin.amount / 100}</td>
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
        var pi = new Payin();

        // sauver dans Localstorage et ajouter au tab[]
        this.setState(state => {
            var newId = pi.getNewId();
            pi.id = newId;
            pi.copy(state);
            pi.amount = pi.amount * 100;
            pi.save();

            const list = state.tab.concat({ pi });

            list.sort((a,b) => { 
                if(a.id < b.id) return -1;
                else if(a.id > b.id) return 1;
                else return 0;
             })
            return { tab: list };
        });

        window.location.reload(false);
    }

    render() {
        return (

            <div class="bg-light rounded border container-fluid col-lg-8 col-md-11 col-sm-10" >
                <br />
                <h1 align="center"><a class="text-success"> Mes Dépôts </a></h1>
                <br />

                <Table striped bordered hover variant="success">
                    <thead>
                        <th width="30%"># transaction </th>
                        <th width="70%">Montant (€)</th>
                    </thead>


                    {this.tabPayins()}
                </Table>

                <br /><br />
                <div align="center" >
                    <Button variant="success" onClick={this.toggleCollapse}>
                        Effectuer un dépôt
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
export default myPayins;
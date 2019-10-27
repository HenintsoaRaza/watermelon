import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Const from '../../const.js';
import Card from '../../objects/card.js';


const cste = new Const();

class lineCard extends Component {
    constructor(props) {
        super(props);

        var c = this.props.card;

        this.state = {
            id: c.id,
            last_4: c.last_4,
            brand: c.brand,
            expired_at: c.expired_at,
            userId: c.userId,

            readOnly: true,
            modify: '',
            save: 'none'
        };
    }

    toggleMode = () => {
        if (this.state.modify === '') {
            this.setState({ modify: 'none', save: '', readOnly: false });
        } else {
            this.setState({ modify: '', save: 'none', readOnly: true });
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    saveChanges = (event) => {
        this.toggleMode();

        var c = new Card();
        c.copy(this.state);

        if (c.last_4.length == 4 && (/^\d+$/.test(c.last_4))) {
            c.saveCard();

        } else {
            alert("Le numéro de la carte saisi n'est pas valide (4 chiffres)");
            event.preventDefault();
            event.stopPropagation();
        }
    }

    delete = () => {
        var util = new Card();
        util.removeCardById(this.state.id);
        this.props.refresh();
    }

    render() {
        return (
            <tr>
                <td align="center">
                    <Form.Control type="text" style={{ color: 'white' }}
                        name="last_4" plaintext value={this.state.last_4}
                        readOnly={this.state.readOnly} onChange={this.handleInputChange} />
                </td>

                <td align="center">
                    <Form.Control as="select" name="brand" plaintext
                        onChange={this.handleInputChange} style={{ color: 'white' }}
                        readOnly={this.state.readOnly} value={this.state.brand}>

                        <option style={{ color: 'black', display: this.state.save }}>
                            Visa
                        </option>
                        <option style={{ color: 'black', display: this.state.save }}>
                            Master Card
                        </option>
                        <option style={{ color: 'black', display: this.state.save }}>
                            American Express
                        </option>
                        <option style={{ color: 'black', display: this.state.save }}>
                            Union Pay
                        </option>
                        <option style={{ color: 'black', display: this.state.save }}>
                            JCB
                        </option>
                    </Form.Control>
                </td>

                <td align="center">
                    <Form.Control type="month" name="expired_at"
                        plaintext style={{ color: 'white' }} onChange={this.handleInputChange}
                        readOnly={this.state.readOnly} value={this.state.expired_at} />
                </td>

                <td align="center">
                    <Button style={{ display: this.state.modify }} variant="secondary"
                        onClick={this.toggleMode} >
                        Modifier
                        </Button>

                    <Button style={{ display: this.state.save }} variant="primary"
                        onClick={this.saveChanges} >
                        Enregistrer
                        </Button>

                    <Button onClick={this.delete} variant="danger">Supprimer</Button>
                </td>
            </tr>
        );
    }
}
export default lineCard;
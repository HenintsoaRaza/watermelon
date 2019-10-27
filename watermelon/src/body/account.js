import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Const from '../const.js';
import User from '../objects/user.js';

const cste = new Const();

class account extends Component {
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

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => {
            let user = { ...prevState.user };
            user[name] = value;
            return { user };
        });
    }

    modify = () => {
        this.setState({ readOnly: !this.state.readOnly });
    }

    save = () => {
        var u = new User();
        if (u.existEmail(this.state.user.email)) { // (1) Si l'email existe bien
            var id = u.existEmail(this.state.user.email);

            if (id == this.state.user.id) { // (1)-(A) Si c'est le même id (même compte)
                u.copy(this.state.user);
                u.saveUser();
                alert('Les modifications ont été enregistrées');

            } else { // (1)-(B) Si l'email appartient à un autre compte
                alert('Cette addresse email possède déjà un compte');
            }

        } else { //(2) Si l'email n'existe pas 
            u.copy(this.state.user);
            u.saveUser();
            alert('Les modifications ont été enregistrées');
        }
    }



    render() {
        return (


            <div>
                <br /><br /><br /><br />
                <div class="bg-light rounded border container-fluid col-lg-4 col-md-8 col-sm-10" >
                    <br /><br />
                    <h1 align="center"><a class="text-dark"> Mon Compte </a></h1>
                    <br /><br />
                    <Form >

                        <Form.Group controlId="formBasicfname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control
                                required readOnly={this.state.readOnly} name="first_name"
                                value={this.state.user.first_name}
                                onChange={this.handleInputChange}
                                type="text" />
                        </Form.Group>

                        <Form.Group controlId="formBasiclname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                required readOnly={this.state.readOnly} name="last_name"
                                value={this.state.user.last_name}
                                onChange={this.handleInputChange}
                                type="text" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control
                                required readOnly={this.state.readOnly} name="email"
                                value={this.state.user.email}
                                onChange={this.handleInputChange}
                                type="email" />
                            <Form.Control.Feedback type="invalid">Cette adresse email est déjà prise !</Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de Passe</Form.Label>
                            <Form.Control
                                required readOnly={this.state.readOnly} name="password"
                                value={this.state.user.password}
                                onChange={this.handleInputChange}
                                type="password" />
                        </Form.Group>

                        <br /><br />
                        <Form.Group controlId="formBasicButton">
                            <Button variant="dark" size="lg" block onClick={() => { this.modify() }}>
                                Modifier
                            </Button>
                            <Button variant="primary" size="lg" block onClick={() => { this.save() }}>
                                Enregistrer
                            </Button>
                        </Form.Group>

                        <br /><br />

                    </Form>
                </div>
            </div>
        );
    }
}
export default account;
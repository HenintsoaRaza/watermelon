import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../objects/user.js';


class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        var util = new User();
        if (util.userNotIn(this.state.email)) { //Si on ne trouve pas l'email
            event.preventDefault();
            event.stopPropagation();
            alert("Cette adresse mail n'existe pas");

        } else { //Si l'email existe bien
            var u = new User();
            u.findUserByEmail(this.state.email); //u prend la valeur de l'objet trouvé par email

            if (u.password !== this.state.password) { // Si le mdp saisi ne colle pas avec celui enregistré
                event.preventDefault();
                event.stopPropagation();
                alert("Le mot de passe est incorrect");

            } else {
                var pState = { userId: u.id, page: 'wallet' };
                var str = JSON.stringify(pState);
                localStorage.setItem('prevState', str);
                // Se connecter sur la page "Mon compte" avec le user trouvé
            }
        }
    }


    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <div class="bg-light rounded border border-success container-fluid col-lg-4 col-md-8 col-sm-10" >
                    <br /><br />
                    <h1 align="center"><a class="text-success" > Se Connecter </a></h1>
                    <br /><br />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control
                                required name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                type="email" placeholder="Entrer email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de Passe</Form.Label>
                            <Form.Control
                                required name="password"
                                value={this.state.pwd}
                                onChange={this.handleInputChange}
                                type="password" placeholder="Mot de Passe" />
                        </Form.Group>
                        <br />
                        <Form.Group class="justify-content-end" controlId="formBasicButton">
                            <Button variant="success" type="submit">
                                Connexion
                            </Button>
                        </Form.Group>
                    </Form >
                    <br /><br />
                </div>
            </div>
        );
    }

}
export default signIn;
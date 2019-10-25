import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import userNotIn from './utility/userNotIn';
import loadUsers from './utility/loadUsers';

class signUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            first_name: '',
            last_name: '',
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

    /*
        1. charger tous les users
        2. vérifier que l'email n'est pas utilisé
          2.1 email existant: message d'erreur
          2.2 email non existant: création de compte
        3. création de compte: attribution de l'id 'u'+(max+1)
    */

    handleSubmit = (event) => {
        var listUsers = loadUsers();
        if (userNotIn(listUsers, this.state.email)) {

            var idMax = 0;

            listUsers.forEach(element => {
                if (element.id >= idMax) {
                    idMax = element.id;
                }
            });
            idMax++;

            var key = 'u'.concat(idMax.toString());
            this.setState({ id: idMax }, () => {
                //New user
                localStorage.setItem(key, JSON.stringify(this.state));

                //New wallet
                var wKey = 'w'.concat(this.state.id);
                const wallet = { id: this.state.id, balance: 0 };
                localStorage.setItem(wKey, JSON.stringify(wallet));
            });
            alert('Félicitations vous êtes inscrits !');
        } else {
            event.preventDefault();
            event.stopPropagation();
            alert('Cette email est déjà prise !');
        }
    }

    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <div class="rounded border border-danger container-fluid col-lg-4 col-md-8 col-sm-10" >
                    <br /><br />
                    <h1 align="center"><a class="text-danger"> S'inscrire </a></h1>
                    <br /><br />
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="formBasicfname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control
                                required name="first_name"
                                value={this.state.fname}
                                onChange={this.handleInputChange}
                                type="text" placeholder="Prénom" />
                        </Form.Group>

                        <Form.Group controlId="formBasiclname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                required name="last_name"
                                value={this.state.lname}
                                onChange={this.handleInputChange}
                                type="text" placeholder="Nom de famille" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control
                                required name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                type="email" placeholder="Entrer email" />
                            <Form.Control.Feedback type="invalid">Cette adresse email est déjà prise !</Form.Control.Feedback>

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
                        <Form.Group controlId="formBasicButton">
                            <Button variant="danger" type="submit">
                                Inscription
                            </Button>
                        </Form.Group>

                    </Form >
                    <br /><br />
                </div>
            </div>
        );
    }

}
export default signUp;

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/*
function handleEmail(event) {
        this.setState({ email: event.target.email });
    }
function handlePassword(event) {
        this.setState1({ lpassword: event.target.password });
    }

function handleConnect(event) {
        alert('Welcome to watermelon');
        event.preventDefault();
    }*/


class signIn extends Component {


    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <div class="rounded border border-success container-fluid col-lg-4 col-md-8 col-sm-10" >
                    <br /><br />
                    <h1 align="center"><a class="text-success" > Se Connecter </a></h1>
                    <br /><br />
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control required type="email" placeholder="Entrer email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de Passe</Form.Label>
                            <Form.Control required type="password" placeholder="Mot de Passe" />
                        </Form.Group>
                        <br />
                        <Form.Group  class="justify-content-end" controlId="formBasicButton">
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
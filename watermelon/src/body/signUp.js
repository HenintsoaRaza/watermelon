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


class signUp extends Component {

    handleSubmit(event){
        
    }


    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <div class="rounded border border-danger container-fluid col-lg-4 col-md-8 col-sm-10" >
                    <br /><br />
                    <h1><a class="text-danger"> S'inscrire </a></h1>
                    <br /><br />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicfname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control required name="fname" type="text" placeholder="Prénom" />
                        </Form.Group>
                        <Form.Group controlId="formBasiclname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control required name="lname" type="text" placeholder="Nom de famille" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control required name="email" type="email" placeholder="Entrer email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de Passe</Form.Label>
                            <Form.Control required name="pwd" type="password" placeholder="Mot de Passe" />
                        </Form.Group>

                        <br />
                        <Form.Group class="justify-content-end" controlId="formBasicButton">
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

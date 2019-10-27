import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import User from './objects/user';
import './App.css';
import logo from './img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (eventKey) => {

        switch (eventKey) {
            case 'signOut':
                this.props.onChange({ userId: -1, page: eventKey });
                break;

            case 'signIn':
                this.props.onChange({ userId: -1, page: eventKey });
                break;

            case 'signUp':
                this.props.onChange({ userId: -1, page: eventKey });
                break;

            case 'account':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'card':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'wallet':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            default:
                alert('default case');
                break;
        }
    }

    displayHeader = () => {
        
        if (this.props.userId === -1) {
            return (
                <Nav
                    className="justify-content-end"
                    onSelect={selectedKey => this.handleChange(selectedKey)}
                >
                    <Nav.Link eventKey="signOut"> Accueil </Nav.Link>
                    <Badge variant="danger">
                        <Nav.Link eventKey="signUp"><a class="text-white"> Inscription </a></Nav.Link>
                    </Badge>

                    <Badge variant="success">
                        <Nav.Link eventKey="signIn"><a class="text-white"> Connexion </a></Nav.Link>
                    </Badge>
                </Nav>
            );
        } else {
            var u = new User();
            u.findUserById(this.props.userId);

            return (
                <Nav
                    className="justify-content-end"
                    onSelect={selectedKey => this.handleChange(selectedKey)}
                >

                    <Nav.Link eventKey="card">Mes Cartes Bancaires </Nav.Link>
                    <Nav.Link eventKey="wallet">  Mon Portefeuille  </Nav.Link>
                    <Nav.Link eventKey="account">     Mon Compte     </Nav.Link>

                    <Badge variant="danger">
                        {u.email} <br />
                        <Nav.Link eventKey="signOut" >Déconnexion</Nav.Link>
                    </Badge>
                </Nav>
            );
        }

    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <div>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="40"
                            height="33"
                            class="d-inline-block align-top"
                            alt="logo"
                        />Watermelon
                    </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    {this.displayHeader()}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
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

            case 'addCard':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'delCard':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'updCard':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'deposit':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'withdrawal':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'transfer':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'account':
                this.props.onChange({ userId: this.props.userId, page: eventKey });
                break;

            case 'signUp':
                this.props.onChange({ userId: -1, page: eventKey });
                break;

            case 'signIn':
                this.props.onChange({ userId: -1, page: eventKey });
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
            return (
                <Nav
                    className="justify-content-end"
                    onSelect={selectedKey => this.handleChange(selectedKey)}
                >
                    <NavDropdown title="Mes Cartes Bancaires" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="addCard">Ajouter une carte</NavDropdown.Item>
                        <NavDropdown.Item eventKey="delCard">Supprimer une carte</NavDropdown.Item>
                        <NavDropdown.Item eventKey="updCard">Modifier une carte</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Mon Portefeuille" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="deposit">Effectuer un dépôt</NavDropdown.Item>
                        <NavDropdown.Item eventKey="withdrawal">Effectuer un retrait</NavDropdown.Item>
                        <NavDropdown.Item eventKey="transfer">Effectuer un transfert</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey="account">Mon Compte</Nav.Link>

                    <Badge variant="danger">
                        {this.props.userId} <br />
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
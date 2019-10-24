import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { isLogicalExpression } from '@babel/types';
import logo from './img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : 'Bertrand',
        }
        
    }

    userAction(eventKey){
        if(eventKey == 'deconnexion'){
            this.setState({user: 'null'}, ()=> {console.log(this.state.user);} );
            
            alert(`Set ${this.state.user}`);
        }
    }

    displayHeader() {
        if (this.user == 'null') {
            return(
            <Nav 
                className="justify-content-end" 
                onSelect={selectedKey => alert(`selected ${selectedKey}`) }
                >
                <Badge variant="secondary">
                    <Nav.Link eventKey="inscription" >Inscription</Nav.Link>
                </Badge>

                <Badge variant="success">
                    <Nav.Link eventKey="connexion" >Connexion</Nav.Link>
                </Badge>
            </Nav>
            );

        } else {
            return (
                <Nav className="justify-content-end" onSelect={ selectedKey => this.userAction(selectedKey) }>
                    <NavDropdown title="Mes Cartes Bancaires" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ajouter une carte</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Supprimer une carte</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Modifier une carte</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Mon Portefeuille" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Effectuer un dépôt</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Effectuer un retrait</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Effectuer un transfert</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey="compte">Mon Compte</Nav.Link>

                    <Badge variant="danger">
                        {this.state.user} <br />
                        <Nav.Link eventKey="deconnexion" >Déconnexion</Nav.Link>
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
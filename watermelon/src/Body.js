import React, { Component } from 'react';
import './App.css';
import * as display from './body/index.js';


class Body extends Component {
    constructor(props) {
        super(props);
    }

    displayBody = () => {

        switch (this.props.page) {
            case 'signOut': //Déconnexion
                return display.signOut();

            case 'card':
                return <display.myCards userId={this.props.userId} />;

            case 'wallet':
                return <display.myWallet userId={this.props.userId} />;

            case 'account':
                return <display.account userId={this.props.userId} />;

            case 'signUp': //Inscription
                return <display.signUp />;

            case 'signIn': //Connexion
                return <display.signIn />;

            default:
                alert('default case');
                break;
        }
    }

    render() {
        return (
            <main class="container-fluid" role="main">
                {this.displayBody()}
            </main>
        );

    }
}
export default Body;
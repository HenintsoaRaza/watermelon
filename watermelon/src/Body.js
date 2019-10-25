import React, { Component } from 'react';
import './App.css';
import * as display from './body/index.js';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '',
            user: '',
        }
    }

    handleChange = () => {
        return this.props.onChange;
    }
    
    displayBody = () => {

        switch (this.props.page) {
            case 'signOut': //Déconnexion
                return display.signOut();

            case 'addCard':

                break;

            case 'delCard':

                break;

            case 'updCard':

                break;

            case 'deposit':

                break;

            case 'withdrawal':

                break;

            case 'transfer':

                break;

            case 'account':

                break;

            case 'signUp': //Inscription
                return <display.signUp/>;

            case 'signIn': //Connexion
                return <display.signIn/>;

            default:
                alert('default case');
                break;
        }
    }

    render() {
        return (
            <main class="container-fluid" role="main">
                {this.displayBody()}
                page: {this.props.page} <br />
                user: {this.props.user}
            </main>
        );

    }
}
export default Body;
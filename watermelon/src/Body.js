import React, { Component } from 'react';
import './App.css';
import * as display from './body/index.js';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '',
            userId: '',
        }
    }

    handleChange = () => {
        return this.props.onChange;
    }

    displayBody = () => {

        switch (this.props.page) {
            case 'signOut': //Déconnexion
                return display.signOut();

            case 'card':
                return <display.myCards />;

            case 'wallet':
                //return <display.wallet />;

            /*
            case 'addCard':
                return <display.addCard />;

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

            */

            case 'account':
                return <display.account />;

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
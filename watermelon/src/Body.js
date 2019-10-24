import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { isLogicalExpression } from '@babel/types';
import signOut from './body/signOut.js';

class Body extends Component {
    constructor(props) {
        super(props);
        this.displayBody = this.displayBody.bind(this);
    }

    displayBody() {

        switch (this.props.page) {
            case 'signOut':
                return signOut();
<<<<<<< HEAD
=======
                break;
>>>>>>> HeaderBranch

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

            case 'signUp':

                break;

            case 'signIn':

                break;

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
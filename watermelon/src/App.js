import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Const from './const.js';

var prevState;
var cste = new Const();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: -1,
            page: 'signOut'
        };
    }

    handleChange = (e) => {
        this.setState({ userId: e.userId, page: e.page });
    }

    componentDidUpdate() {
        prevState = localStorage.getItem(cste.keyPrevState);
        localStorage.setItem(cste.keyPrevState, JSON.stringify(this.state));
    }

    componentDidMount() {
        prevState = JSON.parse(localStorage.getItem(cste.keyPrevState));
        if (prevState !== null) {
            if (prevState.page !== 'signOut') {
                this.setState(JSON.parse(localStorage.getItem(cste.keyPrevState)));
            }
        }
    }

    footer = () => {
        return (
            <div class="bg-light position-sticky">
                <div align="center">
                    <br /><br /><br />
                    <font size="6" color="LightGrey">Auteurs:  </font><br /><br />
                    <font size="4" color="LightGrey">Henintsoa RAZAFINDRAZAKA </font><br />
                    <font size="4" color="LightGrey">Noha ZAHRAN </font>
                    <br /><br /><br />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header
                    userId={this.state.userId}
                    onChange={this.handleChange}

                />
                <Body
                    userId={this.state.userId}
                    page={this.state.page}
                    onChange={this.handleChange}
                />

                <br /><br /><br /><br /><br />
                {this.footer()}
            </div>
        );
    }

}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';

const keyPrevState = 'prevState';
var PrevState;

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            userId: -1,
            page: 'signOut'
        };
        //localStorage.setItem(keyPrevState,JSON.stringify(this.state));
    }

    handleChange(e) {
        this.setState({ userId: e.userId, page: e.page });
    }

    componentDidUpdate() {
        PrevState = localStorage.getItem(keyPrevState);
        localStorage.setItem(keyPrevState, JSON.stringify(this.state));
    }

    componentDidMount() {
        PrevState = JSON.parse(localStorage.getItem(keyPrevState));
        if (PrevState !== null) {
            if (PrevState.page !== 'signOut') {
                this.setState(JSON.parse(localStorage.getItem(keyPrevState)));
            }
        }

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
            </div>
        );
    }

}

export default App;

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
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            userId: -1,
            page: 'signOut'
        };
    }

    handleChange(e) {
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

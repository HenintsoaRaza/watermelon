import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            user: '',
            page: 'signOut'
        };
    }

    handleChange(e) {
        this.setState({ user: e.user, page: e.page });
    }

    render() {
        return (
            <div>
                <Header
                    user={this.state.user}
                    onChange={this.handleChange}

                />
                <Body
                    user={this.state.user}
                    page={this.state.page}
                    onChange={this.handleChange}

                
                />
            </div>
        );
    }

}

export default App;

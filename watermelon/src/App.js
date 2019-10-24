import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { isLogicalExpression } from '@babel/types';
import Header from './Header.js';
import Body from './Body.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            user: 'Bertrand',
            page: 'signIn'
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
                    
                
                />
            </div>
        );
    }

}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';

const keyPrevState = 'prevState';
var PrevState ;

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

    componentDidUpdate(){
        PrevState = localStorage.getItem(keyPrevState);
        localStorage.setItem(keyPrevState,JSON.stringify(this.state));
    }

    componentDidMount(){
        PrevState = JSON.parse(localStorage.getItem(keyPrevState));
        if(PrevState.page != 'signOut'){
            this.setState(JSON.parse(localStorage.getItem(keyPrevState)));
        }
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

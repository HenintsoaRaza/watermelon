import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { isLogicalExpression } from '@babel/types';
import logo from './img/logo.jpg';
import Header from './Header.js';
import Body from './Body.js';

function App() {
    return (
        <div>
            <Header/>
            <div class="dropdown-divider"></div>
            <Body/>
        </div>

    );
}

export default App;

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { isLogicalExpression } from '@babel/types';
import logo from './img/logo.jpg';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-lights ">
                <a class="navbar-brand " href="#" >
                    <img
                        src={logo}
                        width="33"
                        height="33"
                        class="d-inline-block align-top"
                    /> Watermelon
                </a>

                <div class="navbar-nav-scroll justify-content-end">
                    <ul class="nav nav-fill ">
                        <li class="nav-item ">
                            <a class="nav-link active" href="#"><b>Inscription</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><b>Connexion</b></a>
                        </li>
                    </ul> 
                </div>

            </nav>
            
        );
    }
}
export default Header;
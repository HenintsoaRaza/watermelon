import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import Const from '../const.js';
import User from '../objects/user.js';
import Wallet from '../objects/wallet.js';
import MyTransfers from './myWallet/myTransfers';
import MyPayins from './myWallet/myPayins';
import MyPayouts from './myWallet/myPayouts';


const cste = new Const();

class myWallet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var userId = this.props.userId;
        var util = new Wallet();


        return (

            <div>
                <br /><br />
                <div class="bg-light rounded border container-fluid col-lg-8 col-md-11 col-sm-10" >
                    <br /><br />
                    <h1 align="center"><a class="text-black"> Mon Solde </a></h1>

                    <br />
                    <h1 align="center"><a class="text-black"> {util.getBalanceById(userId)} € </a></h1>
                    <br /><br />
                </div>
                <br /><br />

                <MyTransfers userId={this.props.userId} />
                <br /><br />

                <MyPayins userId={this.props.userId}/>
                <br /><br />

                <MyPayouts userId={this.props.userId}/>
                <br /><br />


            </div>
        );
    }
}
export default myWallet;
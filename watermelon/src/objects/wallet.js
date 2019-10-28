import Transfer from './transfer.js';
import Payin from './payin.js';
import Payout from './payout.js';
import User from './user.js';

class Wallet {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }

    saveWallet = () => {
        //save the user in the localstorage
        var key = 'w'.concat(this.id);
        var obj = JSON.stringify(this);
        localStorage.setItem(key, obj);
    }

    copy = (obj) => {
        this.id = obj.id;
        this.balance = obj.balance;
    }

    loadWallets = () => {
        var listWallets = [];

        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.charAt(0) == 'w') {
                var w = new Wallet();
                w.copy(JSON.parse(localStorage.getItem(key)));
                listWallets.push(w);
            }
        }

        return listWallets;
    }

    exist = (id) => {
        var key = 'w'.concat(id);

        if (localStorage.getItem(key) == null) {
            return false;
        } else {
            return true;
        }
    }

    getBalanceById = (id) => {
        var key = 'w'.concat(id);
        var w = new Wallet();

        if (w.exist(id)) {
            w.copy(JSON.parse(localStorage.getItem(key)));
            return w.balance;
        } else return null;
    }

    calculBalance = (wallet_id) => {
        var pi = new Payin();
        var po = new Payout();
        var tr = new Transfer();

        var payins = pi.totalPayins(wallet_id);
        var payouts = po.totalPayouts(wallet_id);
        var transfers = tr.balanceTransfers(wallet_id);

        var balance = payins - payouts + transfers;

        this.id = wallet_id;
        this.balance = balance;

        this.saveWallet();

        return balance;
    }

    getEmail = (wallet_id) => {
        var u = new User();
        u.findUserById(wallet_id);

        return u.email;
    }

}
export default Wallet;
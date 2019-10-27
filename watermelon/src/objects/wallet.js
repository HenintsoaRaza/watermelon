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
        
        if(localStorage.getItem(key) == null){
            return false;
        } else {
            return true;
        }
    }

    getBalanceById = (id) => {
        var key = 'w'.concat(id);
        var w = new Wallet();

        if(w.exist(id)){
            w.copy(JSON.parse(localStorage.getItem(key)));
            return w.balance;
        } else return null;
    }

}
export default Wallet;
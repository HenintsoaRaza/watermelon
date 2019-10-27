class Payin {
    constructor(id, wallet_id, amount) {
        this.id = id;
        this.wallet_id = wallet_id;
        this.amount = amount;
    }

    loadPayins = () => {
        var listPayins = [];

        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.charAt(0) == 'i') {
                var pi = new Payin();
                pi.copy2(JSON.parse(localStorage.getItem(key)));
                listPayins.push(pi);
            }
        }

        return listPayins;
    }

    getNewId = () => {
        if (this.loadPayins().length == 0) {
            return 1;
        } else {
            const listPayins = this.loadPayins();
            var max = 0;
            for (let i = 0; i < listPayins.length; i++) {
                if (listPayins[i].id > max) {
                    max = listPayins[i].id;
                }
            }
            max += 1;
            return max;
        }
    }

    copy = (obj) => {
        this.wallet_id = obj.wallet_id;
        this.amount = (obj.amount);
    }

    copy2 = (obj) => {
        this.id = obj.id;
        this.wallet_id = obj.wallet_id;
        this.amount = (obj.amount);
    }

    save = () => {
        var key = 'i'.concat(this.id);
        var obj = JSON.stringify(this);
        localStorage.setItem(key, obj);
    }

    getPayinsByWallet_id = (wallet_id) => {
            var listPayins = this.loadPayins();
    
            for (let i = 0; i < listPayins.length; i++) {
                if (listPayins[i].wallet_id !== wallet_id) {
                    listPayins.splice(i, 1);
                }
            }
    
            return listPayins;
    }

}
export default Payin;

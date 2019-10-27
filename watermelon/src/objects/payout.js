class Payout {
    constructor(id, wallet_id, amount) {
        this.id = id;
        this.wallet_id = wallet_id;
        this.amount = amount;
    }

    loadPayouts = () => {
        var listPayouts = [];

        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.charAt(0) == 'o') {
                var po = new Payout();
                po.copy2(JSON.parse(localStorage.getItem(key)));
                listPayouts.push(po);
            }
        }

        return listPayouts;
    }

    getNewId = () => {
        if (this.loadPayouts().length == 0) {
            return 1;
        } else {
            const listPayouts = this.loadPayouts();
            var max = 0;
            for (let i = 0; i < listPayouts.length; i++) {
                if (listPayouts[i].id > max) {
                    max = listPayouts[i].id;
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
        var key = 'o'.concat(this.id);
        var obj = JSON.stringify(this);
        localStorage.setItem(key, obj);
    }

    getPayoutsByWallet_id = (wallet_id) => {
            var listPayouts = this.loadPayouts();
    
            for (let i = 0; i < listPayouts.length; i++) {
                if (listPayouts[i].wallet_id !== wallet_id) {
                    listPayouts.splice(i, 1);
                }
            }
    
            return listPayouts;
    }

}
export default Payout;

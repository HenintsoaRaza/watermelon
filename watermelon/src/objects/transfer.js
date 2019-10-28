class Transfer {
    constructor(id, debited_wallet_id, credited_wallet_id, amount) {
        this.id = id;
        this.debited_wallet_id = debited_wallet_id;
        this.credited_wallet_id = credited_wallet_id;
        this.amount = amount;
    }

    load = () => {
        var listTransfer = [];

        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.charAt(0) == 't') {
                var t = new Transfer();
                t.copy(JSON.parse(localStorage.getItem(key)));
                listTransfer.push(t);
            }
        }

        return listTransfer;
    }

    getTransfersByWallet_id = (wallet_id) => {
        var listTransfer = this.load();
        var tab = [];

        for (let i = 0; i < listTransfer.length; i++) {
            if (listTransfer[i].debited_wallet_id == wallet_id || listTransfer[i].credited_wallet_i == wallet_id) {
                tab.push(listTransfer[i]);
            }
        }

        return tab;
    }

    getNewId = () => {
        if (this.load().length == 0) {
            return 1;
        } else {
            const listTransfers = this.load();

            var max = 0;
            for (let i = 0; i < listTransfers.length; i++) {
                if (listTransfers[i].id > max) {
                    max = listTransfers[i].id;
                }
            }
            max += 1;

            return max;
        }
    }

    copy = (obj) => {
        this.id = obj.id;
        this.debited_wallet_id = obj.debited_wallet_id;
        this.credited_wallet_id = obj.credited_wallet_id;
        this.amount = obj.amount;
    }

    save = () => {
        var key = 't'.concat(this.id);
        var obj = JSON.stringify(this);
        localStorage.setItem(key, obj);
    }

    balanceTransfers = (wallet_id) => {
        var listTransfers = this.getTransfersByWallet_id(wallet_id);
        var pos = 0;
        var neg = 0;

        for (let i = 0; i < listTransfers.length; i++) {
            if (listTransfers[i].credited_wallet_id == wallet_id) {
                pos = pos + listTransfers[i].amount;
            } else {
                neg = neg + listTransfers[i].amount;
            }
        }

        var balance = pos - neg;

        return balance;
    }

}
export default Transfer;
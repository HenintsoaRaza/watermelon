class wallet{
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
}
export default wallet;
function transfer(id, debited_wallet_id, credited_wallet_i, amount) {
    this.id = id;
    this.debited_wallet_id = debited_wallet_id;
    this.credited_wallet_i = credited_wallet_i;
    this.amount = amount;

    return this;
}
export default transfer;
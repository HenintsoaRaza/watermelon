function card(id, last_4, brand, expired_at) {
    this.id = id;
    this.last_4 = last_4;
    this.brand = brand;
    this.expired_at = expired_at;

    return this;
}
export default card;
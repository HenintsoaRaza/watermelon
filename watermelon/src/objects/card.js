class Card {
    constructor(id, last_4, brand, expired_at, userId) {
        this.id = id;
        this.last_4 = last_4;
        this.brand = brand;
        this.expired_at = expired_at;
        this.userId = userId;
    }

    getNewId = () => {
        if (this.loadCards().length == 0) {
            return 1;
        } else {
            const listCards = this.loadCards();
            var max = 0;
            for (let i = 0; i < listCards.length; i++) {
                if (listCards[i].id > max) {
                    max = listCards[i].id;
                }
            }
            max = max + 1;
            return max;
        }
    }

    loadCards = () => {
        var listCards = [];

        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.charAt(0) == 'c') {
                var c = new Card();
                c.copy(JSON.parse(localStorage.getItem(key)));
                listCards.push(c);
            }
        }

        return listCards;
    }

    saveCard = () => {
        //save the card in the localstorage
        var key = 'c'.concat(this.id);
        var obj = JSON.stringify(this);
        localStorage.setItem(key, obj);
    }

    copy = (obj) => {
        this.last_4 = obj.last_4;
        this.brand = obj.brand;
        this.expired_at = obj.expired_at;
        this.userId = obj.userId;
        this.id = obj.id;
    }

    getCardByUserId = (userId) => {
        var listCards = this.loadCards();

        for(let i = 0; i < listCards.length; i++){
            if(listCards[i].userId !== userId){
                listCards.splice(i, 1);
            }
        }

        return listCards;
    }



}
export default Card;
import Card from '../../objects/card.js';


function loadCards(){
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
export default loadCards;

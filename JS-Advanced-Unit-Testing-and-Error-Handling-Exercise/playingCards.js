function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face) || !validSuits.includes(suit)) {
        throw new Error('Invalid card face or suit.');
    }

    return {
        face: face,
        suit: suit,
        toString: function() {
            let suitSymbol = '';
            switch (suit) {
                case 'S':
                    suitSymbol = '\u2660';
                    break;
                case 'H':
                    suitSymbol = '\u2665';
                    break;
                case 'D':
                    suitSymbol = '\u2666';
                    break;
                case 'C':
                    suitSymbol = '\u2663';
                    break;
            }
            return `${face}${suitSymbol}`;
        }
    };
}


try {
    const card1 = createCard('A', 'S');
    console.log(card1.toString());

    const card2 = createCard('10', 'H');
    console.log(card2.toString());


    const card3 = createCard('1', 'C');
} catch (error) {
    console.log(error.message);
}

export {
    createCard
}

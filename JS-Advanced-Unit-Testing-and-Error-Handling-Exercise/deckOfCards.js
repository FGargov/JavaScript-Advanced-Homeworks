import { createCard } from './playingCards.js';

function printDeckOfCards(cards) {
    // Array to store valid card representations
    const validCards = [];
    // Array to store invalid cards
    const invalidCards = [];

    // Iterate through each card in the input array
    for (let card of cards) {
        try {
            // Attempt to create a card
            const validCard = createCard(card);

            // If the card is valid, add its representation to the validCards array
            validCards.push(validCard.toString());
        } catch (error) {
            // If the card is invalid, add it to the array of invalid cards
            invalidCards.push(card);
        }
    }

    // Print the valid cards as a sequence, separated by space
    console.log(validCards.join(' '));

    // If there are invalid cards, print a single error message
    if (invalidCards.length > 0) {
        console.log(`Invalid cards: ${invalidCards.join(', ')}`);
    }
}

// Example usage
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);

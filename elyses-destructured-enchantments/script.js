// Exercism - Elyses Destructured Enchantments

// Task 1 - Get the first card

function getFirstCard(deck) {
    return deck[0];
  }

// Task 2 - Get the second card

function getSecondCard(deck) {
    return deck[1];
  }

// Task 3 - Swap the first two cards

function swapTopTwoCards(deck) {
    let [topCard, secCard, ...rest] = deck;
    return [secCard, topCard, ...rest];
  }

// Task 4 - Discard the top card

function discardTopCard(deck) {
    let [topCard, ...rest] = deck;
    return [topCard, rest];
  }

// Task 5 - Insert face cards

const FACE_CARDS = ['jack', 'queen', 'king'];

function insertFaceCards(deck) {
    let [topCard, ...rest] = deck;
    return [topCard, ...FACE_CARDS, ...rest];
  }
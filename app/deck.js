"use strict";

var Deck = function() {
  this.cardDeck = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
};

Deck.prototype.cards = function() {
 return this.cardDeck;
};

module.exports = Deck;

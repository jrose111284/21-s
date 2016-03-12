"use strict";

var Deck = function() {
  this.deck = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
};

Deck.prototype.cards = function() {
 return this.deck;
};

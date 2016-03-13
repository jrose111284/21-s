"use strict";

var Deck = function() {
  this.cardDeck = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  this.cardSuite = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
};

Deck.prototype.cards = function() {
 return this.cardDeck;
};

Deck.prototype.dealCard = function() {
  var result = this.cardDeck[Math.floor(Math.random()*this.cardDeck.length)];
  return result;
};

module.exports = Deck;

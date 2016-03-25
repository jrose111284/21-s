"use strict";

var Deck = function() {
  this.cardDeck = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  this.cardSuite = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
};

Deck.prototype.cards = function() {
  return this.cardDeck;
};

Deck.prototype.dealCardNumber = function() {
  var result = this.cardDeck[Math.floor(Math.random() * this.cardDeck.length)];
  return result;
};

Deck.prototype.dealsuite = function() {
  var result = this.cardSuite[Math.floor(Math.random() * this.cardSuite.length)];
  return result;
};

module.exports = Deck;

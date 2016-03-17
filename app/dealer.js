"use strict";

var Dealer = function() {
  this.cardNumber = []
};

Dealer.prototype.dealCard = function() {
  this.cardNumber.push(deck.dealCardNumber(), deck.dealsuite());
  deck.dealsuite();
  return 'your card is ' + this.cardNumber[0] + ' of ' + this.cardNumber[1];
};

Dealer.prototype.calculateCards = function(){
  return this.cardNumber[0];
};

module.exports = Dealer;

"use strict";

var Dealer = function() {
  this.cardNumber = []
};

Dealer.prototype.dealCard = function() {

  this.cardNumber.push(deck.dealCardNumber(), deck.dealsuite());
  this.checkCard();
  return 'your card is ' + this.cardNumber[0] + ' of ' + this.cardNumber[1];
};

Dealer.prototype.calculateCards = function(){
  return (this.cardNumber[0] + this.cardNumber[2]);
};

Dealer.prototype.checkCard = function(){
  var i = this.cardNumber.indexOf('Jack', 'Queen', 'King');
  this.cardNumber[i] = 10;
};
module.exports = Dealer;

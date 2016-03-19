"use strict";

var Dealer = function() {
  this.cardNumber = []
};

Dealer.prototype.dealCard = function() {
  this.cardNumber.push(deck.dealCardNumber(), deck.dealsuite());
  this.checkCard();
  return 'your card is ' + this.cardNumber[0] + ' of ' + this.cardNumber[1];
};

Dealer.prototype.checkCard = function(){
  for (var i = 0; i < this.cardNumber.length; i++)
    if (this.cardNumber[i] == 'Jack')
        this.cardNumber[i] = 10;
    else if (this.cardNumber[i] == 'Queen') {
        this.cardNumber[i] = 10;
    } else if (this.cardNumber[i] == 'King') {
        this.cardNumber[i] = 10;
    } else if (this.cardNumber[i] == 'Ace') {
      this.cardNumber[i] = 1;
    }else {
        return this.cardNumber;
  }
};
module.exports = Dealer;

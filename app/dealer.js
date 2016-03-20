"use strict";

var Dealer = function() {
  this.cardNumber = []
  this.suite = []
};

Dealer.prototype.dealCard = function() {
  this.cardNumber.push(deck.dealCardNumber())
  this.suite.push(deck.dealsuite());
  this.checkCard();
  return 'your card is ' + this.cardNumber[0] + ' of ' + this.suite[0];
};

Dealer.prototype.checkCard = function() {
  for (var i = 0; i < this.cardNumber.length; i++)
    if (this.cardNumber[i] == 'Jack')
        this.cardNumber[i] = 10;
    else if (this.cardNumber[i] == 'Queen') {
        this.cardNumber[i] = 10;
    } else if (this.cardNumber[i] == 'King') {
        this.cardNumber[i] = 10;
    } else if (this.cardNumber[i] == 'Ace') {
      this.cardNumber[i] = 11;
    }else {
      return this.cardNumber;
  }
};

Dealer.prototype.total = function() {
  if ((this.cardNumber[0] += this.cardNumber[1]) >= 17) {
    return ('sorry your total is ' + (this.cardNumber[0] += this.cardNumber[1]) + ' and is over 17, cannot have another card');
    console.log(this.cardNumber);
  } else {
    return ('your total is ' + (this.cardNumber[0] += this.cardNumber[1]));
}
};

module.exports = Dealer;

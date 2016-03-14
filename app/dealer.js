"use strict";

var Dealer = function() {

};

Dealer.prototype.dealCard = function(deck) {
  return this.dealCardNumber();
};
var deck = new Deck();
module.exports = Dealer;

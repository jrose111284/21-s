"use strict";

var Dealer = function() {

};

Dealer.prototype.dealCard = function() {
  return 'your card is ' + deck.dealCardNumber() + ' of ' + deck.dealsuite();
};

Dealer.prototype.calculateCards = function(){
  var total = [];
  total.push(deck.dealCardNumber());
  // for (var i = 0, sum = 0; i < total.length; sum += total[i++]);
  return total;
}

module.exports = Dealer;

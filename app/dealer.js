"use strict";

var Dealer = function() {

};

Dealer.prototype.dealCard = function() {
return 'your card is ' + deck.dealCardNumber() + ' of ' + deck.dealsuite();
};

module.exports = Dealer;

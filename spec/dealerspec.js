var Dealer = require('../app/dealer.js');

beforeEach(function() {
  dealer = new Dealer();
});

describe('dealer dealing cards', function() {
  it('deals 2 cards to sam', function() {
    expect(dealer.dealCard()).toEqual('your card is 7 of Clubs');
  });
});

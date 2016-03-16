var Dealer = require('../app/dealer.js');
var Deck = require('../app/deck.js');

beforeEach(function() {
  dealer = new Dealer();
  deck = new Deck();
});

describe('dealer dealing cards', function() {

  it('deals a card with a suite', function(){
    spyOn(Math,'random').and.returnValues(0.48, 0.49);
    expect(dealer.dealCard()).toEqual('your card is 7 of Clubs');
  });

  it('deals a card with a suite', function(){
    spyOn(Math,'random').and.returnValues(0.88, 0.74);
    expect(dealer.dealCard()).toEqual('your card is Queen of Hearts');
  });

  it('dealer will give sam 2 cards', function(){
    spyOn(Math,'random').and.returnValues(0.48, 0.49, 0.88, 0.74);
    expect(dealer.dealCard()).toEqual('your card is 7 of Clubs');
    expect(dealer.dealCard()).toEqual('your card is Queen of Hearts');
  });
});

describe('will added the two cards together', function(){

  it('will add the cards together not including ace,jack,queen king', function(){
    spyOn(Math,'random').and.returnValue(0.72);
    expect(dealer.calculateCards()).toEqual([10]);
  });
});

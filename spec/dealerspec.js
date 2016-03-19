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
    spyOn(Math,'random').and.returnValues(0.72, 0.74);
    expect(dealer.dealCard()).toEqual('your card is 10 of Hearts');
  });
});

describe('will change jack, queen, king to 10', function(){

  it('will can work with jack', function(){
    spyOn(Math,'random').and.returnValues(0.80, 0.24);
    expect(dealer.dealCard()).toEqual('your card is 10 of Spades');
  });

  it('will can work with Queen', function(){
    spyOn(Math,'random').and.returnValues(0.88, 0.24);
    expect(dealer.dealCard()).toEqual('your card is 10 of Spades');
  });

  it('will can work with King', function(){
    spyOn(Math,'random').and.returnValues(0.96, 0.24);
    expect(dealer.dealCard()).toEqual('your card is 10 of Spades');
  });
});

describe('will change Ace to equal 1', function(){
  it('will make ace eaual 1 not ace', function(){
    spyOn(Math,'random').and.returnValues(0.01, 0.24);
    expect(dealer.dealCard()).toEqual('your card is 1 of Spades');
  });
});

describe('will add to the two cards together', function(){
  it('will make ace eaual 1 not ace', function(){
    spyOn(Math,'random').and.returnValue(0.48);
    dealer.dealCard();
    dealer.dealCard();
    expect(dealer.total()).toEqual('your total is 14');
  });
});

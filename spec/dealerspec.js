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

  it('will can work with ace', function(){
    spyOn(Math,'random').and.returnValues(0.01, 0.24);
    expect(dealer.dealCard()).toEqual('your card is 11 of Spades');
  });


});

// describe('will add to the two cards together', function(){
//   it('will add to card together that are jack queen king', function(){
//     spyOn(Math,'random').and.returnValue(0.48);
//     dealer.dealCard();
//     dealer.dealCard();
//     expect(dealer.total()).toEqual('your total is 14');
//   });
// });

  describe('dealer will stop given cards if sam reaches 17 or over', function(){
    it('if your 2 cards are over 17 you cant draw another card', function(){
      spyOn(Math,'random').and.returnValue(0.96);
      dealer.dealCard();
      dealer.dealCard();
      expect(dealer.total()).toEqual('sorry your total is 17 and is over 17, cannot have another card');
    });
  });

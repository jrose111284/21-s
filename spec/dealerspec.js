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
});

describe('will added the two cards together', function(){

  it('will add the cards together not including ace,jack,queen king', function(){
    spyOn(Math,'random').and.returnValue(0.72);
    dealer.dealCard();
    expect(dealer.calculateCards()).toEqual(10);
  });

});

// describe('will check if total is 21', function(){
//   it('will add 2 cards together that equals 21',function() {
//     dealer.dealCard().and.returnValue(0.72);
//     expect(dealer.calculateCards()).toEqual('well done you beat the dealer');
//   });
// });

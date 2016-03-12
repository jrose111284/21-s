var Deck = require('../app/deck.js');

describe('21', function() {
  var cardsMock = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  beforeEach(function() {
    deck = new Deck();
  });

  describe('initialization', function() {

    it('stores possable cards in a deck', function() {
      expect(deck.cardDeck).toEqual(cardsMock);
    });
  });

  describe('dealing cards', function(){

    it('deals one card', function(){
      spyOn(Math,'random').and.returnValue(0.01);
      expect(deck.dealCard()).toEqual('Ace');
    });
  })

});

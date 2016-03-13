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

    it('deals number two card', function(){
      spyOn(Math,'random').and.returnValue(0.08);
      expect(deck.dealCard()).toEqual(2);
    });

    it('deals number three card', function(){
      spyOn(Math,'random').and.returnValue(0.16);
      expect(deck.dealCard()).toEqual(3);
    });

    it('deals number four card', function(){
      spyOn(Math,'random').and.returnValue(0.24);
      expect(deck.dealCard()).toEqual(4);
    });

    it('deals number five card', function(){
      spyOn(Math,'random').and.returnValue(0.32);
      expect(deck.dealCard()).toEqual(5);
    });

    it('deals number six card', function(){
      spyOn(Math,'random').and.returnValue(0.40);
      expect(deck.dealCard()).toEqual(6);
    });
  })

});

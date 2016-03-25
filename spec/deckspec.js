var Deck = require('../app/deck.js');

describe('21', function() {
  var cardsMock = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var cardsSuiteMock = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];

  beforeEach(function() {
    deck = new Deck();
  });

  describe('initialization', function() {
    it('stores possable cards in a deck', function() {
      expect(deck.cardDeck).toEqual(cardsMock);
    });

    it('stores possable cards suites in a deck', function() {
      expect(deck.cardSuite).toEqual(cardsSuiteMock);
    });
  });

  describe('dealing cards', function() {
    it('deals one card', function() {
      spyOn(Math, 'random').and.returnValue(0.01);
      expect(deck.dealCardNumber()).toEqual('Ace');
    });

    it('deals number two card', function() {
      spyOn(Math, 'random').and.returnValue(0.08);
      expect(deck.dealCardNumber()).toEqual(2);
    });

    it('deals number three card', function() {
      spyOn(Math, 'random').and.returnValue(0.16);
      expect(deck.dealCardNumber()).toEqual(3);
    });

    it('deals number four card', function() {
      spyOn(Math, 'random').and.returnValue(0.24);
      expect(deck.dealCardNumber()).toEqual(4);
    });

    it('deals number five card', function() {
      spyOn(Math, 'random').and.returnValue(0.32);
      expect(deck.dealCardNumber()).toEqual(5);
    });

    it('deals number six card', function() {
      spyOn(Math, 'random').and.returnValue(0.40);
      expect(deck.dealCardNumber()).toEqual(6);
    });

    it('deals number seven card', function() {
      spyOn(Math, 'random').and.returnValue(0.48);
      expect(deck.dealCardNumber()).toEqual(7);
    });

    it('deals number eight card', function() {
      spyOn(Math, 'random').and.returnValue(0.56);
      expect(deck.dealCardNumber()).toEqual(8);
    });

    it('deals number nine card', function() {
      spyOn(Math, 'random').and.returnValue(0.64);
      expect(deck.dealCardNumber()).toEqual(9);
    });

    it('deals number ten card', function() {
      spyOn(Math, 'random').and.returnValue(0.72);
      expect(deck.dealCardNumber()).toEqual(10);
    });

    it('deals number jack card', function() {
      spyOn(Math, 'random').and.returnValue(0.80);
      expect(deck.dealCardNumber()).toEqual('Jack');
    });

    it('deals number queen card', function() {
      spyOn(Math, 'random').and.returnValue(0.88);
      expect(deck.dealCardNumber()).toEqual('Queen');
    });

    it('deals number king card', function() {
      spyOn(Math, 'random').and.returnValue(0.96);
      expect(deck.dealCardNumber()).toEqual('King');
    });
  });

  describe('dealing card suites', function() {
    it('deals the suite Spades', function() {
      spyOn(Math, 'random').and.returnValue(0.24);
      expect(deck.dealsuite()).toEqual('Spades');
    });

    it('deals the suite Clubs', function() {
      spyOn(Math, 'random').and.returnValue(0.49);
      expect(deck.dealsuite()).toEqual('Clubs');
    });

    it('deals the suite Hearts', function() {
      spyOn(Math, 'random').and.returnValue(0.74);
      expect(deck.dealsuite()).toEqual('Hearts');
    });

    it('deals the suite Diamonds', function() {
      spyOn(Math, 'random').and.returnValue(0.99);
      expect(deck.dealsuite()).toEqual('Diamonds');
    });
  });

});

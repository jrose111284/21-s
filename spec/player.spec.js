var Player = require('../app/player.js');

  beforeEach(function() {
    player = new Player();
  });

  describe('initialization', function() {

    it('players have a name', function() {
      expect(player.name).toEqual("sam");
    });
  });

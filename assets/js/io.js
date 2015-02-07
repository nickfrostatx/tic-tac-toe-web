var Socket = function() {};

Socket.prototype.connect = function() {
  this.sock = io.connect('http://localhost:3001');

  this.sock.on('newgame', function(turn) {
    game.start(turn);
  });

  this.sock.on('opponent left', function() {
    game.stop();
  });

  this.sock.on('move', function(space) {
    game.move(2, space);
  });
};

Socket.prototype.move = function(index) {
  this.sock.emit('move', index);
};

var socket = new Socket();

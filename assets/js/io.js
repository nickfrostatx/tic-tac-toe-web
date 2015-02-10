var Socket = function() {};

Socket.prototype.connect = function() {
  this.sock = io.connect('https://nfrost.me');

  this.sock.on('newgame', function(turn) {
    game.start(turn);
  });

  this.sock.on('opponent left', function() {
    game.stop();
  });

  this.sock.on('move', function(space) {
    game.move(2, space);
  });

  this.sock.on('win', function(winners) {
    game.setWinners(1, winners);
  });

  this.sock.on('loss', function(winners) {
    game.setWinners(2, winners);
  });

  this.sock.on('draw', function() {
    game.setDraw();
  });
};

Socket.prototype.move = function(index) {
  this.sock.emit('move', index);
};

var socket = new Socket();
